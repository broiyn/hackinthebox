<!DOCTYPE html>
<html>
<head>
<title>
PHP Session Destroy
</title>
</head>
<body>
<?php
echo "<h1> Session Destroyed</h1>";

setcookie('name', "");
echo "<a href=\"./php-sessions-form.php\">Back to the PHP CGI Form</a><br>";
echo "<a href=\"./php-cookie-sessions-1.php\">Back to Page 1</a><br>";
echo "<a href=\"./php-cookie-sessions-2.php\">Back to Page 2</a><br>";
?>
</body>
</html>