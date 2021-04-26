#!/usr/bin/perl
use CGI qw/:standard/;     
use CGI;

print "Cache-Control: no-cache\n";
print header;
print start_html("Environment Variables");
print "<h1 align='center'>Perl Session</h1><hr />";

if($query->cookie('PERL_COOKIE')) {
  print "<p>Your session token is: $query->cookie('PERL_COOKIE')</p>";
} else {
  $token = 5;
  print "<p>You just started a session, your token is $token</p>";
  $query = new CGI;
  $cookie = $query->cookie(-name=>'PERL_COOKIE',
			 -value=>'5',
			 -expires=>'+4h',
			 -path=>'/');
  print $query->header(-cookie=>$cookie);
}

print end_html;