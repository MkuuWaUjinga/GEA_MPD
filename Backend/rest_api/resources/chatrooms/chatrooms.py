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
        if event.get('pathParameters'):
            chatroom_id = event['pathParameters'].get("chatroomId")
            try:
                messages = get_all_messages(chatroom_id, stage)
            except (ClientError, KeyError):
                return {"statusCode": 400,
                        'body': 'Retrieving messages failed',
                        'headers': {"Content-Type": "text/plain"}
                        }
            response = {
                "statusCode": 200,
                "body": {"cows": messages}
            }
    elif http_method == 'POST':
        expected_keys = ["chatroom_id", "message", "receiving_user_email"]
        if event.get("body") and all(key in event["body"] for key in expected_keys) and \
                len(expected_keys)==len(event["body"]):
            try:
                post_message(event["body"]["chatroom_id"], event["body"]["message"],
                             event["body"]["receiving_user_eamil"], stage)
            except (ClientError, KeyError):
                return {
                    "statusCode": 400,
                    'body': 'Posting message failed',
                    'headers': {"Content-Type": "text/plain"}
                }
            response = {
                "statusCode": 200
            }

    return response

def get_all_messages(chatroom_id, stage):

    return

def post_message(user_id, receiving_user_email, message, stage):
    return

def notify_members(user_id, receiving_user_id, message):
    pass