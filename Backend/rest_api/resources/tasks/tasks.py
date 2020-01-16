import boto3
from botocore.exceptions import ClientError
from lambda_decorators import cors_headers, load_json_body
import simplejson as json
from functools import wraps
import datetime
import jinja2
import base64

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
            tasks = get_all_tasks(user_id, stage)
        except (ClientError, KeyError):
            return {"statusCode": 400,
                    'body': 'Retrieving tasks failed',
                    'headers': {"Content-Type": "text/plain"}
                    }
        response = {
            "statusCode": 200,
            "body": {"tasks": tasks}
        }

    elif http_method == 'POST':
        expected_keys = ["task_title", "assigned_person_id", "todos", "notification_id", "messages"]
        if event.get("body") and all(key in event["body"] for key in expected_keys) and \
                len(expected_keys)==len(event["body"]):
            try:
                body = event["body"]
                post_task(user_id, body["task_title"], body["assigned_person_id"], body["todos"],
                             body["notification_id"], body["messages"], stage)
            except (ClientError, KeyError) as e:
                return {
                    "statusCode": 400,
                    'body': f'Creating task failed, {str(e)}',
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

def get_all_tasks(user_id, stage):
    task_table = dynamo_db_client.Table('Tasks'+ '-dev' if stage=='dev' else '')

    tasks = task_table.query(
        KeyConditionExpression='userId = :user_id',
        ExpressionAttributeValues={
            ":user_id": user_id
        }
    )['Items']
    return task_view(tasks)

def task_view(tasks):
    return tasks

def post_task(user_id, task_title, assigned_person_id, todos, notification_id, messages, stage):
    task_table = dynamo_db_client.Table('Tasks'+ '-dev' if stage=='dev' else '')
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d:%H:%M:%S")

    task_table.put_item(
        Item={
            "userId": user_id,
            "taskId": timestamp,
            "task_title": task_title,
            "assigned_person_id": assigned_person_id,
            "todos": todos,
            "notification_id": notification_id,
            "messages": messages
        }
    )

def notify_recipient(recipient_email, recipient_first_name, sender_first_name):
    s3_client = boto3.client('s3')
    sender = "Jules from Farmatic <farmatic@web.de>"

    template = s3_client.get_object(
        Bucket='farmatic-assets',
        Key='new_message_email.html'
    )['Body'].read()
    template = jinja2.Template(template.decode('utf-8'))

    logo = s3_client.get_object(
        Bucket='farmatic-assets',
        Key='logo.png'
    )['Body'].read()

    logo_base_64 = ''.join(base64.encodebytes(logo).decode('utf-8').splitlines())
    link = "https://www.google.com"
    ses_region = 'eu-central-1'
    body_text = f"""Hi {recipient_first_name}, \n \n Your client {sender_first_name} sent you information about new 
    Mastitis cases on his farm. To see all the information and make an appointment, please click on the link below: \n
    {link}"""
    template_html = template.render(name=recipient_first_name, client_name=sender_first_name,
                                           logo='data:image/jpeg;base64,{}'.format(logo_base_64, link=link))

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
