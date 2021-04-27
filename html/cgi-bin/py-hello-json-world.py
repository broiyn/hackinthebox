#!/usr/bin/python3

import cgitb
import time
import os
import json

cgitb.enable()

print("Cache-Control: no-cache")
print("Content-type: application/json")
print()

date = time.asctime( time.localtime(time.time()) )
address = os.environ["REMOTE_ADDR"]

packet = { 
    "title": "Hello, Python!", 
    "heading": "hackinthebox was here - Hello, Ruby!",
    "message": "This page was generated with the Python programming language",
    "time": date,
    "IP": address,
}

json = json.dumps(packet)
print(json)