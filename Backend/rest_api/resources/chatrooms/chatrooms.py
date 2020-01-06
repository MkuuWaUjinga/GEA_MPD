import boto3
from botocore.exceptions import ClientError
from lambda_decorators import cors_headers, load_json_body
import simplejson as json
from functools import wraps
import datetime
import jinja2
import base64
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
            "message": message,
            "senderFirstName": sender_first_name,
            "senderId": sender_id
        }
    )
    notify_recipient(recipient_email, recipient_first_name, sender_first_name)

def notify_recipient(recipient_email, recipient_first_name, sender_first_name):
    s3_client = boto3.client('s3')
    sender = "farmatic@web.de"

    template = s3_client.get_object(
        Bucket='kahawa-assets',
        Key='contact_email.html'
    )['Body'].read()
    template = jinja2.Template(template.decode('utf-8'))

    logo = s3_client.get_object(
        Bucket='kahawa-assets',
        Key='logo.png'
    )['Body'].read()

    logo_base_64 = ''.join(base64.encodebytes(logo).decode('utf-8').splitlines())
    link = "https://www.google.com"
    ses_region = 'eu-central-1'
    body_text = f"""Hi {recipient_first_name}, \n \n Your client {sender_first_name} sent you information about new 
    Mastitis cases on his farm. To see all the information and make an appointment, please click on the link below: \n
    {link}"""
    template_html = template.render(name=recipient_first_name, client_name=sender_first_name,
                                           logo='data:image/jpeg;base64,{}'.format(logo_base_64))

    mail_client = boto3.client('ses', region_name=ses_region)
    response = mail_client.send_email(
        Destination={
            'ToAddresses': [
                recipient_email
            ],
        },
        Message={
            'Body': {
                'Html': {
                    'Charset': 'UTF-8',
                    'Data': template_html,
                },
                'Text': {
                    'Charset': 'UTF-8',
                    'Data': body_text,
                },
            },
            'Subject': {
                'Charset': 'UTF-8',
                'Data': f"You got a new inspection request from {sender_first_name}",
            },
        },
        Source=sender,
    )
