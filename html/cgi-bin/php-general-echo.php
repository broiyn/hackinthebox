<!DOCTYPE html>
<html>
<head>
<title>
    GENERAL Request Echo
</title>
</head>
<body>
<?php
echo "<h1 align=center>General Request Echo</h1><hr>";

switch($_SERVER['REQUEST_METHOD'])
{
case 'GET':  $the_request = &$_GET; break;
case 'POST': $the_request = &$_POST; break;
case 'PUT':  $the_request = &$_PUT; break;
case 'HEAD': $the_request = &$_HEAD; break;
default:
}

echo "<p><b>Request Method:</b> ".$_SERVER['REQUEST_METHOD']. "</p>";
echo "<p><b>Protocol:</b> " . $_SERVER['SERVER_PROTOCOL'] . "</p>";
echo "<p><b>Message Body:</b></p>";
if ($the_request == $_GET){
    echo "<p><b>Query: </b></p>";
}
echo "<ul>";
foreach ($the_request as $k=>$v){
    echo "<li><b>" . $k .":</b> " . $v . "</li>" ;
}
echo "</ul";



?>

</body>
</html>
