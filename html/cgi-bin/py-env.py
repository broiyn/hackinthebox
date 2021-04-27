#!/usr/bin/python3

import cgitb
import os

cgitb.enable()

print("Cache-Control: no-cache")
print("Content-type: text/html")
print()

print("""
<!DOCTYPE html>
<html><head><title>Environment Variables</title>
</head><body><h1 align="center">Environment Variables</h1>
<hr>
""")

for variable in os.environ.keys():
    print("<b>%s:</b> %s<br />" % (variable, os.environ[variable]))

print("</body></html>")