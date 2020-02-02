import boto3

class Analyser:

    def __init__(self, stage):
        self.client = boto3.resource('dynamodb')
        self.metric_table = self.client.Table('FarmMetrics'+ '-dev' if stage=='dev' else '')

    def __call__(self, user_id):
        pass