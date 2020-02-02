import random
import string
import datetime
import boto3

class Notification:

    supported_notfication_types = ["Somatic Cell Count Alert"]

    def __init__(self, notification_type, title, escalation_status, proof):
        if notification_type not in self.supported_notfication_types:
            raise IllicitNotificationTypeError(f"Notification of type {type} are not supported")
        self.id = ''.join([random.choice(string.ascii_letters + string.digits) for _ in range(32)])
        self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d:%H:%M:%S")
        self.notification_type = notification_type
        self.title = title
        self.escalation_status = escalation_status
        self.proof = proof

    def store_for_user(self, user_id, stage):
        self.client = boto3.resource('dynamodb')
        table = self.client.Table('Users'+ '-dev' if stage=='dev' else '')

        table.update_item(Key={
            'userId': user_id},
            UpdateExpression="set notifications = list_append(notifications, :notification)",
            ExpressionAttributeValues={
                ':notification': [{
                    "id": self.id,
                    "timestamp": self.timestamp,
                    "title": self.title,
                    "escalation_status": self.escalation_status,
                    "proof": self.proof
                }]
            }
        )


class IllicitNotificationTypeError(Exception):

    def __init__(self, message):
        self.message = message

    def __str__(self):
        return str(self.message)
