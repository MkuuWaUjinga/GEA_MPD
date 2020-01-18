from analysers.somatic_cell_count import SomaticCellCountAnalyser

user_id = "E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN"

def start(event, context):
    stage = event['requestContext']['stage']
    analyser = SomaticCellCountAnalyser(stage)
    notification = analyser(user_id)
    notification.store_for_user(user_id, stage)

if __name__=="__main__":
    print(start({"requestContext": {"stage": 'dev'}}, {}))