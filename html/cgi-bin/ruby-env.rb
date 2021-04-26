#!/usr/local/bin/ruby
require 'cgi'

print "Cache-Control: no-cache\n";
print "Content-type: text/html \n\n";

# print HTML file top
print <<END;
<!DOCTYPE html>
<html><head><title>Environment Variables</title>
</head><body><h1 align="center">Environment Variables</h1>
<hr>
END

# Loop over the environment variables and print each variable and its value
for variable in ENV
  print "<b>#{variable[0]}:</b> #{variable[1]}<br />\n";
end

# Print the HTML file bottom
print "</body></html>";