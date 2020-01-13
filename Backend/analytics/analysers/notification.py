import random
import string
import datetime

class Notification:

    allowed_types = ["Somatic Cell Count Alert"]

    def __init__(self, type, title, escalation_status, proof):
        if type not in self.allowed_types:
            raise IllicitNotificationTypeError(f"Notification of type {type} are not supported")
        self.id = ''.join([random.choice(string.ascii_letters + string.digits) for _ in range(32)])
        self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d:%H:%M:%S")
        self.type = type
        self.title = title,
        self.escalation_status = escalation_status
        self.proof = proof

class IllicitNotificationTypeError(Exception):

    def __init__(self, message):
        self.message = message

    def __str__(self):
        return str(self.message)
