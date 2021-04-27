#!/usr/local/bin/ruby
require 'cgi'

print "Cache-Control: no-cache\n";
print "Content-type: text/html \n\n";

# print HTML file top
print <<END;
<!DOCTYPE html>
<html><head><title>POST Request Echo</title>
</head><body><h1 align="center">POST Request Echo</h1>
<hr>
END

bytes_read = STDIN.read; 
print "<b>Message Body:</b> #{bytes_read}<br />\n";
# Print out formatted query string
if bytes_read.length > 0
  pairs = bytes_read.split('&');
  print "<table><b>Formatted Message Body:</b>"
  for pair in pairs
    name = pair.split('=');
    print "<tr><td>#{name[0]}:</td><td>#{name[1]}</td></tr>\n"
  end
  print "</table>"
end

# Print the HTML file bottom
print "</body></html>";