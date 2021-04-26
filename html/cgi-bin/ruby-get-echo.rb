#!/usr/local/bin/ruby
require 'cgi'

print "Cache-Control: no-cache\n";
print "Content-type: text/html \n\n";

# print HTML file top
print <<END;
<!DOCTYPE html>
<html><head><title>GET Request Echo</title>
</head><body><h1 align="center">Get Request Echo</h1>
<hr>
END

# The Query String is simply an environment variable
print "<b>Query String:</b> #{ENV['QUERY_STRING']}\n<br><br/>";

# Print out formatted query string
if ENV['QUERY_STRING'].length > 0
  buffer = ENV['QUERY_STRING'];
  pairs = buffer.split('&');
  print "<table><b>Formatted Query String:</b>"
  for pair in pairs
    name = pair.split('=');
    print "<tr><td>#{name[0]}:</td><td>#{name[1]}</td></tr>\n"
  end
  print "</table>"
end

# Print the HTML file bottom
print "</body></html>";