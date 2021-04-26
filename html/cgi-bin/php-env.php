<!DOCTYPE html>
<html>
<head>
<title>
    Environment Variables
</title>
</head>
<body>
<h2 align=center>Environment</h2><hr>
<?php
$env = getenv();
echo "<h2>Environment Variables</h2><br>";
echo "<ul>";
foreach ($env as $k=>$v)
echo "<li><b>". $k . ":</b>" . $v . "</li>";
echo "</ul>";
echo "<h2>Server Variables</h2><br>";
echo "<ul>";
foreach ($_SERVER as $k=>$v)
echo "<li><b>". $k . ":</b>" . $v . "</li>";
echo "</ul>";
?>
?>

</body>
</html>
