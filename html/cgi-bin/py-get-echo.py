#!/usr/bin/python3

import cgitb
import os

cgitb.enable()

print("Cache-Control: no-cache")
print("Content-type: text/html")
print()

print("""
<!DOCTYPE html>
<html><head><title>GET Request Echo</title>
</head><body><h1 align="center">Get Request Echo</h1>
<hr>
""")

print("<b>Query String:</b> %s<br />" % (os.environ['QUERY_STRING']))



print("</body></html>")