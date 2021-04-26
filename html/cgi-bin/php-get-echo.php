<!DOCTYPE html>
<html>
<head>
<title>
    GET Request Echo
</title>
</head>
<body>
<?php
echo "<h1 align=center>GET Request Echo</h1><hr>";
$query = $_SERVER['QUERY_STRING'];
echo "Query String:" . $query ;
if (strlen($query) > 0){
    echo "<ul>";
    $arr = explode("&", $query);
    foreach ($arr as $ele){
        $an_ele = explode("=",$ele);
        echo "<li><b>" . $an_ele[0] . ":</b> " . $an_ele[1] . "</li>";
    }
    echo "</ul>";
}
?>

</body>
</html>
