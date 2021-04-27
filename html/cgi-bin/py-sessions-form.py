#!/usr/bin/python3
import cgi
import cgitb
import os
import sys

cgitb.enable()
form = cgi.FieldStorage()
print("Cache-Control: no-cache")
print("Content-type: text/html")
print()

print("""
<!DOCTYPE html>
<html><head><title>CGI Form</title>
</head><body><h1 align="center">Session Testing</h1>
<hr>
""")

print("CGI using Ruby")
print("<form name=\"form\" action=\"ruby-cookie-sessions-1.rb\" method=\"post\">")
print("<label>What is your name?")
print("<input type=\"text\" name=\"name\" id=\"subject\" value=\"\"><br>")
print("</label>")

print(" <input type=\"submit\" value=\"Test Sessioning\">")
print("</form>")
print(form.getvalue('name'))
print("  <a href=\"/\" style=\"display:inline-block;margin-top:20px;\">Home</a>")

# Print the HTML file bottom
print("</body></html>")