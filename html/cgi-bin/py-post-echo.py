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
<html><head><title>POST Request Echo</title>
</head><body><h1 align="center">POST Request Echo</h1>
<hr>
""")

bytes_read = sys.stdin.read()
print("<b>Message Body:</b> %s<br />" % (bytes_read))

# Print out formatted query string
if len(bytes_read) > 0:
  pairs = bytes_read.split('&')
  print("<table><b>Formatted Message Body:</b>")
  for pair in pairs:
    name = pair.split('=')
    print("<tr><td>%s:</td><td>%s</td></tr>" % (name[0], name[1]))
  print("</table>")

# Print the HTML file bottom
print("</body></html>")