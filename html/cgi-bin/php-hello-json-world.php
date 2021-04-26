<!DOCTYPE html>
<html>
<head>
</head>
<body>
<?php
$message = "hackinthebox was here, Hello World from PHP!";
$date = date("l m-d-Y h:i:s A");
$address = $_SERVER["REMOTE_ADDR"];
$output = array("message"=>$message,"date"=>$date,"ipAddress"=>$address);
echo json_encode($output);

?>

</body>
</html>
