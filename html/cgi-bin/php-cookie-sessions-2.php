<!DOCTYPE html>
<html>
<head>
<title>
PHP Session
</title>
</head>
<body>
<?php
echo "<h1 align=center> PHP Sessions Page 2</h1><hr>";
if ($_COOKIE['name'] == ""){
    echo "<b>Name:</b> You do not have a name set<br>";
} else {
    echo "<b>Name: </b>" . $_COOKIE['name'] . "<br>";
}

echo "<a href=\"./php-sessions-form.php\">CGI Form</a><br>";
echo "<a href=\"./php-cookie-sessions-1.php\">Session Page 1</a><br>";
echo "<form action=\"php-destroy-session.php\" method=\"post\">";
echo "<input type=\"submit\" value=\"Destroy Session\">";
echo "</form>";
?>
</body>
</html>