import datetime
from collections import defaultdict
import numpy as np
from .notification import Notification
from .analyser import Analyser

somatic_cell_count_metric_id = 1
relevant_time_frame = 14 # in days
somatic_cell_count_max_norm_average = 110000

class SomaticCellCountAnalyser(Analyser):

    def __init__(self, stage):
        super(SomaticCellCountAnalyser, self).__init__(stage)
        self.user_table = self.session.resource('dynamodb').Table('Users'+ '-dev' if stage=='dev' else '')
        self.cached_medical_records = None

    def __call__(self, user_id):
        # Hardcode date of design fair to make our analysis consistent for requests before this date.
        current_date = datetime.datetime(2020, 1, 24, 20, 13, 22)
        max_retrieval_date = (current_date - datetime.timedelta(days=relevant_time_frame)).replace(hour=0, minute=0,
                                                                                                   second=0)
        # Gives back all metric values sorted by date
        metrics = self.metric_table.query(
            KeyConditionExpression="userId = :userId and metricIdentifier between :date1 and :date2",
            ExpressionAttributeValues={
                ":userId": "{}#{}".format(user_id, somatic_cell_count_metric_id),
                ":date1": max_retrieval_date.strftime("%Y-%m-%d:%H:%M:%S"),
                ":date2": current_date.strftime("%Y-%m-%d:%H:%M:%S")
            })['Items']
        cows = self.aggregate_metrics_per_cow(metrics)
        cows_with_mastritis_suspicion = [{"cow_id": cow_id,
                                          "detection_timestamp": cows[cow_id]["somatic_cell_count"][-1]["date"],
                                          "notification_title": f"High somatic cell count detected for cow {cow_id}",
                                          "scc_data": cows[cow_id]["somatic_cell_count"],
                                          "medical_record": self.get_medical_record(cow_id, user_id)} for cow_id in cows.keys()
                                         if self.calculate_health_status(cows[cow_id]["somatic_cell_count"]) == 1]

        if cows_with_mastritis_suspicion:
            return Notification(
                title=f"Abnormal somatic cell count detected for {len(cows_with_mastritis_suspicion)} cows",
                escalation_status="alarm",
                proof=cows_with_mastritis_suspicion,
                notification_type="Somatic Cell Count Alert")

    def get_medical_record(self, cow_id, user_id):
        # Connect to cow data base and get medical records for cow with cow_id
        if self.cached_medical_records:
            return self.cached_medical_records.get(cow_id)

        user = self.user_table.get_item(
            Key={
                'userId': user_id
            }
        )['Item']
        self.cached_medical_records = {str(cow["id"]): cow["medical_record"] for cow in user["cows"]}
        return self.cached_medical_records.get(cow_id)



    @staticmethod
    def aggregate_metrics_per_cow(metrics):
        # Build dict with cows id as key and check that resource is always cow
        cows = defaultdict(dict)
        for metric in metrics:
            if metric["resourceType"] == "cow" and int(metric["metricId"]) == 1:
                resource_id = metric["resourceId"]
                metric_value = int(metric["metricValue"])
                if not cows.get(resource_id):
                    cows[resource_id]["somatic_cell_count"] = []

                date = metric["metricIdentifier"].split("#")[0]
                cows[resource_id]["somatic_cell_count"].append({"value": metric_value, "date": date})
        return cows

    @staticmethod
    def calculate_health_status(somatic_cell_count):
        """
        Calcaulate health status given the somatic cell count time series of the last two weeks.
        Low average means healthy (0). Having max fit with a line with positive slope means mastritis suspicion (1).
        Max fit with a line with negative slope means under medication (2).
        :param avg: average cell count of the cow
        :param somatic_cell_count: List of maps e.g. {'date':'2019-22-02:20:20:20', 'value':100000} sorted by date
        :return: 0, 1 or 2 symbolising the cow's health status
        """
        values = [count["value"] for count in somatic_cell_count]
        number_of_values_per_day = 2
        number_of_values_last_two_weeks = min(len(values), 14 * number_of_values_per_day)
        last_two_weeks = values[-number_of_values_last_two_weeks:]
        avg = int(sum(last_two_weeks) / number_of_values_last_two_weeks)
        if not avg > somatic_cell_count_max_norm_average:
            return avg, 0
        coeffs = np.polyfit(list(range(number_of_values_last_two_weeks)), last_two_weeks, 1)
        return 2 if coeffs[-2] < 0 else 1