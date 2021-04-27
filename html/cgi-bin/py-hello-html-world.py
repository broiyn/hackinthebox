#!/usr/bin/python3
#import cgitb
#cgitb.enable()

import cgitb
import time
import os

cgitb.enable()

print("Cache-Control: no-cache\n")    # HTML is following
print("Content-type: text/html\n\n")
print()                             # blank line, end of headers

print("<html>")
print("<head>")
print("<title>Hello, Python!</title>")
print("</head>")
print("<body>")
print("<h1 align=center>Hello Python!</h1>")
print("<hr>")
localtime = time.asctime( time.localtime(time.time()) )
print("<p>This page was generated with the Python programming langauge</p>")
print("<p>Current Time:", localtime, "</p>")

print("<p>Your IP Address:", os.environ["REMOTE_ADDR"],"</p>")

print("</body>")
print("</html>")