<?php
  // Create some random text-encoded data for a line chart.
  //header('content-type: application/json');
  
  // Add data, chart type, chart size, and scale to params.
  $data = array('JS_allowed' => 'false');

  // Send the request, and print out the returned bytes.
  $context = stream_context_create(
    array('http' => array(
      'header'  => "Content-type: application/x-www-form-urlencoded",
      'method' => 'POST',
      'content' => http_build_query($data)
    ))
  );

  $fp = file_get_contents('https://hackinthebox.site/json/posts', false, $context);
  

?>