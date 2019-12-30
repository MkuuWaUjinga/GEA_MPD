import boto3
from botocore.exceptions import ClientError
from lambda_decorators import cors_headers, load_json_body
import simplejson as json
from functools import wraps
import datetime
from collections import defaultdict
import numpy as np

dynamo_db_client = boto3.resource('dynamodb')
user_id = "E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN"

def dump_json_body(handler):

    @wraps(handler)
    def wrapper(event, context):
        response = handler(event, context)
        try:
            if "body" in response:
                try:
                    response["body"] = json.dumps(response["body"])
                except Exception as exception:
                    return {"statusCode": 500, "body": str(exception)}
        except Exception as exception:
            return response
        return response
    return wrapper

@cors_headers
@load_json_body
@dump_json_body
def entry(event, context):
    http_method = event['httpMethod']
    stage = event['requestContext']['stage']

    response = {
        "statusCode": 404
    }

    if http_method == 'GET':
        try:
            if event.get('queryStringParameters'):
                days_back_from_now = int(event['queryStringParameters'].get("days_back_from_now"))
                cows = get_all_cows(user_id, stage, days_back_from_now)
            else:
                cows = get_all_cows(user_id, stage)
        except (ClientError, KeyError):
            return {"statusCode": 400,
                    'body': 'Retrieving cows failed',
                    'headers': {"Content-Type": "text/plain"}
                    }
        response = {
            "statusCode": 200,
            "body": {"cows": cows}
        }

    return response

# Retrieves all cows of a farmer and all relevant metrics about the cows
def get_all_cows(user_id, stage, days_back_from_now=14):
    cow_metric_ids = [1]

    metrics_table = dynamo_db_client.Table('FarmMetrics'+ '-dev' if stage=='dev' else '')
    current_date = datetime.datetime.now()
    max_retrieval_date =  (current_date - datetime.timedelta(days=days_back_from_now)).replace(hour=0, minute=0, second=0)
    metrics = []
    for metric_id in cow_metric_ids:
        # Gives back all metric values sorted by date
        metrics.extend(metrics_table.query(
            KeyConditionExpression="userId = :userId and metricIdentifier between :date1 and :date2",
            ExpressionAttributeValues={
                ":userId": "{}#{}".format(user_id, metric_id),
                ":date1": max_retrieval_date.strftime("%Y-%m-%d:%H:%M:%S"),
                ":date2": current_date.strftime("%Y-%m-%d:%H:%M:%S")
            })['Items'])

    cows = aggregate_metrics_per_cow(metrics)
    return cow_view(cows)

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

def cow_view(cows):
    for cow_id in cows.keys():
        cows[cow_id]["avg"], cows[cow_id]["health_status"] = calculate_health_status(cows[cow_id]["somatic_cell_count"])
    return cows

SOMATIC_CELL_COUNT_MAX_NORM_AVERAGE = 110000

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
    number_of_values_last_two_weeks = min(len(values), 14*number_of_values_per_day)
    last_two_weeks = values[-number_of_values_last_two_weeks:]
    avg = int(sum(last_two_weeks)/number_of_values_last_two_weeks)
    if not avg > SOMATIC_CELL_COUNT_MAX_NORM_AVERAGE:
        return avg, 0
    coeffs = np.polyfit(list(range(number_of_values_last_two_weeks)), last_two_weeks, 1)
    return avg, 2 if coeffs[-2] < 0 else 1