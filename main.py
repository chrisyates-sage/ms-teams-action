    import os
    import pymsteams
    import json
    import re
    import sys
    
    GITHUB_REPOSITORY = os.environ['GITHUB_REPOSITORY']
    GITHUB_ACTOR = os.environ['GITHUB_ACTOR']
    GITHUB_SHA = os.environ['GITHUB_SHA']
    GITHUB_WORKFLOW = os.environ['GITHUB_WORKFLOW']
    GITHUB_EVENT_NAME = os.environ['GITHUB_EVENT_NAME']
    GITHUB_EVENT_PATH = os.environ['GITHUB_EVENT_PATH']
    GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
    GITHUB_REF = os.environ['GITHUB_REF']
    BRANCH = re.sub('(refs\/heads\/)',r'',GITHUB_REF)
    with open(GITHUB_EVENT_PATH, 'r') as json_file:
     data = json.load(json_file)
    pushMessage = data['head_commit']['message']
    compareUrl = data['compare']
    print "Message: "+pushMessage
    print "CompareURL: "+compareUrl
    print "GITHUB_SHA: "+GITHUB_SHA
    print 'Number of arguments:', len(sys.argv), 'arguments.'
    print 'Argument List:', str(sys.argv)