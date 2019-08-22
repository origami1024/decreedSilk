<?php
	$con = mysqli_connect('localhost', 'id8287912_origami1024', 'qwe123', 'id8287912_msgsbase');
	$sql="insert into visitors(ip) values ('" . $_SERVER['REMOTE_ADDR'] . "');";
	$result = mysqli_query($con, $sql);
	mysqli_close($con);
	echo('1');
?>