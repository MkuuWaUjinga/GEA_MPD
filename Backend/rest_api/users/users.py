import boto3
from botocore.exceptions import ClientError
from lambda_decorators import cors_headers, load_json_body, dump_json_body

dynamo_db_client = boto3.resource('dynamodb')

@cors_headers
@load_json_body
@dump_json_body
def entry(event, context):
    http_method = event['httpMethod']
    user_id = event['pathParameters']['id']
    stage = event['requestContext']['stage']

    response = {
        "statusCode": 404
    }

    if http_method == 'GET':
        try:
            user = get_user(user_id, stage)
        except (ClientError, KeyError):
            return {"statusCode": 400,
                    'body': 'Retrieving user from table failed',
                    'headers': {"Content-Type": "text/plain"}
                    }
        response = {
            "statusCode": 200,
            "body": {"user": user}
        }

    return response

def get_user(user_id, stage):
    table = dynamo_db_client.Table('Users'+ '-dev' if stage=='dev' else '')

    user = table.get_item(
        Key={
            'userId': user_id
        }
    )['Item']

    return user


# random = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])