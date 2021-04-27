#!/usr/bin/python3

import cgitb
import os
import sys

cgitb.enable()

print("Cache-Control: no-cache")
print("Content-type: text/html")
print()

print("""
<!DOCTYPE html>
<html><head><title>General Request Echo</title>
</head><body><h1 align="center">General Request Echo</h1>
<hr>
""")

# HTTP Protocol, HTTP Method, and the Query String are all environment variables
print("<p><b>HTTP Protocol:</b> %s</p>" % (os.environ['SERVER_PROTOCOL']))
print("<p><b>HTTP Method:</b> %s</p>" % (os.environ['REQUEST_METHOD']))
print("<p><b>Query String:</b> %s</p>" % (os.environ['QUERY_STRING']))

form_data = sys.stdin.read()

print("<p><b>Message Body:</b>%s</p>" % (form_data))

# Print the HTML file bottom
print("</body></html>")