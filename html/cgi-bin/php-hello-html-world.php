<!DOCTYPE html>
<html>
<head>
<title>
    Hello CGI World
</title>
</head>
<body>
<?php
echo "<h1 align=center>Hackinthebox was here - Hello, PHP! </h1><hr>";
echo "Hello World from PHP!<br>";
date_default_timezone_set("America/San_Diego");
echo "This program was generated on: ". date("l") ." ". date("m/d/Y") . " at " . date("h:i:s A") ."<br>";
echo "Your current IP address is:" .$_SERVER["REMOTE_ADDR"]. "<br>"

?>

</body>
</html>
