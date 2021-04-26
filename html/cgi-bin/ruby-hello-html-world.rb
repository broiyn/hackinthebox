#!/usr/local/bin/ruby
require 'cgi'
print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print "<html>";
print "<head>";
print "<title>Hello, Perl!</title>";
print "</head>";
print "<body>";

print "<h1>Hackinthebox was here - Hello, Ruby!</h1>";
print "<p>This page was generated with the Ruby  programming langauge</p>";

date = Time.new;
print "<p>Current Time: #{date}</p>";

# IP Address is an environment variable when using CGI
address = ENV['REMOTE_ADDR'];
print "<p>Your IP Address: #{address}</p>";

print "</body>";
print "</html>";
print "<html><body>Hello World!</body></html>\r\n";