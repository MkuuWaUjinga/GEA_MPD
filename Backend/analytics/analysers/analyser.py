import boto3

class Analyser:

    def __init__(self, stage):
        self.metric_table = boto3.resource('dynamodb').Table('FarmMetrics'+ '-dev' if stage=='dev' else '')

    def __call__(self, user_id):
        pass