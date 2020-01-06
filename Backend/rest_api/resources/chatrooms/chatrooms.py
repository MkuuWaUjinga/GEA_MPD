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

    if event.get('pathParameters'):
        chat_room_id = event['pathParameters'].get("chatroomId")
        if http_method == 'GET':
                try:
                    messages = get_all_messages(chat_room_id, stage)
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
            expected_keys = ["message", "recipient_email", "recipient_first_name", "sender_id",
                             "sender_first_name"]
            if event.get("body") and all(key in event["body"] for key in expected_keys) and \
                    len(expected_keys)==len(event["body"]):
                try:
                    body = event["body"]
                    post_message(chat_room_id, body["message"], body["recipient_email"],
                                 body["recipient_first_name"], body["sender_id"], body["sender_first_name"], stage)
                except (ClientError, KeyError):
                    return {
                        "statusCode": 400,
                        'body': 'Posting message failed',
                        'headers': {"Content-Type": "text/plain"}
                    }
                response = {
                    "statusCode": 200
                }
            else:
                response = {
                    "statusCode": 400,
                    "body": f"All and only these keys are expected: {expected_keys}"
                }

    return response

def get_all_messages(chat_room_id, stage):
    message_table = dynamo_db_client.Table('ChatMessages'+ '-dev' if stage=='dev' else '')

    messages = message_table.query(
        KeyConditionExpression='chatRoomId = :chatroom_id',
        ExpressionAttributeValues={
            ":chatroom_id": chat_room_id
        }
    )['Items']
    return messages_view(messages)

def messages_view(messages):
    return messages

def post_message(chat_room_id, message, recipient_email, recipient_first_name, sender_id, sender_first_name, stage):
    message_table = dynamo_db_client.Table('ChatMessages'+ '-dev' if stage=='dev' else '')
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d:%H:%M:%S")

    message_table.put_item(
        Item={
            "chatRoomId": chat_room_id,
            "chatMessageId": f"{timestamp}#{sender_id}",
            "message": message
        }
    )
    notify_recipient(message, recipient_email, recipient_first_name, sender_first_name)

def notify_recipient(message, recipient_email, recipient_first_name, sender_first_name):
    pass