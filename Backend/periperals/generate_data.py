import numpy as np
import math
import datetime
import time

"""
The somatic cell count for a cow is usually measured twice a day. In terms of mastritis monitoring the two-week 
development of the somatic cell count is usually taken.
"""

user_id = "E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN"

def get_mastritis_case(time_span_in_days, data_points_per_day):
    buckets = np.linspace(90000, 250000, num=8)
    rands = []
    for i, bucket in enumerate(buckets[:-1]):
        rands.extend(np.random.randint(bucket, buckets[i+1], size=data_points_per_day*2))
    return rands

def get_under_medication(time_span_in_days, data_points_per_day):
    buckets = np.flip(np.linspace(110000, 250000, num=8))
    rands = []
    for i, bucket in enumerate(buckets[:-1]):
        rands.extend(np.random.randint(buckets[i + 1], bucket, size=data_points_per_day*2))
    return rands

def get_healthy(time_span_in_days, data_points_per_day):
    return np.random.randint(90000, 110000, size=data_points_per_day * time_span_in_days)

def generate_case(resource_id, user_id, case_generator, time_span_in_days=14, data_points_per_day=2):
    metric_id = 1
    current_time = datetime.datetime.now() + datetime.timedelta(days=12) # Set time to the date of the design fair
    current_time = current_time.replace(hour=0, minute=0, second=0)
    time_stamps = [(current_time - datetime.timedelta(days=math.floor(i/2),
                                                     hours=np.random.randint(6, 12) if np.mod(i, 2) == 0 else np.random.randint(12, 17),
                                                     minutes=np.random.randint(0, 59),
                                                     seconds=np.random.randint(0, 59))).strftime("%Y-%m-%d:%H:%M:%S")
                  for i in range(time_span_in_days*data_points_per_day)]

    items = [{"metricValue": {"N": str(data_point)},
              "metricId": {"N": str(metric_id)},
              "metricIdentifier": {"S": "{}#{}".format(time_stamp, resource_id)},
              "userId": {"S": "{}#{}".format(user_id, metric_id)},
              "metricName": {"S": "Somatic Cell Count"},
              "resourceType": {"S": "cow"},
              "resourceId": {"S": str(resource_id)}} for time_stamp, data_point in zip(reversed(time_stamps), case_generator(time_span_in_days, data_points_per_day))]
    return items

def chunks(l, n):
    for i in range(0, len(l), n):
        yield l[i:i + n]

dynamo_db_batch_limit = 25
def generate_dynamo_db_json(resource_id, case_generator):
    items = [{"PutRequest": {"Item": item}} for item in generate_case(resource_id, user_id, case_generator)]
    num_chunks = 0
    for i, chunk in enumerate(chunks(items, dynamo_db_batch_limit)):
        dynamo_json = {"FarmMetrics-dev": []}
        dynamo_json["FarmMetrics-dev"].extend(chunk)
        with open(f"request_{i}.json", "w") as f:
            f.write(str(dynamo_json).replace('\'', "\""))
        num_chunks += 1
    import os
    c = "aws dynamodb batch-write-item --request-items file://request_{}.json --profile mpd --region eu-central-1"
    for i in range(num_chunks):
        os.system(c.format(i))

def populate_db(split):
    np.random.seed(100)
    case_to_case_generator = {"healthy":get_healthy,
                  "mastritis":get_mastritis_case,
                  "medication":get_under_medication}
    case_generator_per_id = []
    for k, v in split.items():
        case_generator_per_id.extend(np.repeat(case_to_case_generator[k], v))

    for resource_id, case_generator in enumerate(np.random.permutation(case_generator_per_id)):
        if np.mod(resource_id + 1, 3) == 0:
            # Wait after around 100 items for delay seconds to not exceed max provisioned throughtput by AWS
            delay = 2
            print(f"Waiting for {delay} seconds")
            time.sleep(delay)
        generate_dynamo_db_json(resource_id+1, case_generator)

populate_db({"healthy": 55, "mastritis": 5, "medication": 6})

