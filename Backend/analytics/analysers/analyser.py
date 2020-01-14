import boto3

class Analyser:

    def __init__(self, stage):
        self.session = boto3.Session(
            aws_access_key_id= "AKIAQIQ3QKJLYODOYXPS",
            aws_secret_access_key="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",
        )
        self.metric_table = self.session.resource('dynamodb').Table('FarmMetrics'+ '-dev' if stage=='dev' else '')

    def __call__(self, user_id):
        pass