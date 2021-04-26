<!DOCTYPE html>
<html>
<head>
<title>
    CGI Form
</title>
</head>
<body>
<?php
echo "<h1 align=center>Session Testing</h1><hr>";
echo "CGI using PHP";
echo "<form name=\"form\" action=\"php-cookie-sessions-1.php\" method=\"post\">";
echo "<label>What is your name?";
echo "  <input type=\"text\" name=\"name\" id=\"subject\" value=\"\"><br>";
echo "</label>";

echo " <input type=\"submit\" value=\"Test Sessioning\">";
echo "</form>";
echo $_POST['name'];
echo "  <a href=\"/\" style=\"display:inline-block;margin-top:20px;\">Home</a>" 
?>

</body>
</html>
