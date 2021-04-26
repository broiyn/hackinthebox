#!/usr/local/bin/ruby
require 'cgi'
require 'json'
print "Cache-Control: no-cache\n";
print "Content-type: application/json\n\n";

date = Time.new();
address = ENV['REMOTE_ADDR'];

message = {'title' => 'Hello, Ruby!', 'heading' => 'hackinthebox was here - Hello, Ruby!', 'message' => 'This page was generated with the Ruby programming language', 'time' => date, 'IP' => address};

json = JSON.generate message;
print "#{json}\n";