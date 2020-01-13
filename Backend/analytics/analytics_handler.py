from .analysers.somatic_cell_count import SomaticCellCountAnalyser

user_id = "E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN"

def start(event, context):
    stage = event['requestContext']['stage']
    analyser = SomaticCellCountAnalyser(stage)
    notifications = analyser(user_id)
    # TODO store notification in db
