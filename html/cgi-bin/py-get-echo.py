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

if len(os.environ['QUERY_STRING']) > 0:
  buffer = os.environ['QUERY_STRING']
  pairs = buffer.split('&')
  print("<table><b>Formatted Query String:</b>")
  for pair in pairs:
    name = pair.split('=')
    print("<tr><td>%s:</td><td>%s</td></tr>" % (name[0],name[1]))
  print("</table>")

print("</body></html>")