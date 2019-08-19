<?php
	$con = mysqli_connect('localhost', 'id8287912_origami1024', 'qwe123', 'id8287912_msgsbase');
	//echo($_SERVER['REMOTE_ADDR']);
	$sql="insert into visitors(ip) values ('" . $_SERVER['REMOTE_ADDR'] . "');";
	
	$result = mysqli_query($con, $sql);
	echo($result);
	mysqli_close($con);
?>