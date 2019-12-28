import boto3
from botocore.exceptions import ClientError
from lambda_decorators import cors_headers, load_json_body
import simplejson as json
from functools import wraps

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
            cows = get_all_cows(user_id, stage)
        except (ClientError, KeyError):
            return {"statusCode": 400,
                    'body': 'Retrieving user from table failed',
                    'headers': {"Content-Type": "text/plain"}
                    }
        response = {
            "statusCode": 200,
            "body": {"cows": cows}
        }

    return response

def get_all_cows(user_id, stage):
    table = dynamo_db_client.Table('Users'+ '-dev' if stage=='dev' else '')

    cows = table.get_item(
        Key={
            'userId': user_id
        }
    )['Item']['cows']

    return cows


"""
metrics_ids = [1]
time_range = 14
def get_all_cows(user_id, metrics_id, time_range, stage):
    table = dynamo_db_client.Table('FarmMetric'+ '-dev' if stage=='dev' else '')

    for metric_id in metrics_id:
        metric = table.get_item(
            Key={
                'userId': user_id + "#{}".format(metric_id)
            }
        )['Item']['cows']

    return user
"""