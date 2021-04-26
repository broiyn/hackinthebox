<!DOCTYPE html>
<html>
<head>
<title>
    GET Request Echo
</title>
</head>
<body>
<?php
echo "<h1 align=center>POST Request Echo</h1><hr>";
echo "<h2> Message Body:</h2>";
$get_post = &$_POST;
echo "<ul>";
foreach ($get_post as $k=>$v){
    echo "<li><b>" . $k . ":</b> " . $v . "</li>";
}
echo "</ul>";
?>

</body>
</html>
