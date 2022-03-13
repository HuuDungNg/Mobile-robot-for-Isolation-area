<?php
// doc du lieu tu website gui ve;
$times   = $_POST["times"];
$rooms  = $_POST["rooms"];
$foods  = $_POST["foods"];
$status = $_POST["status"];
// ket noi database
include("config.php");

//gui data xuong database
//$sql  = "update orders set times='$times',rooms='$rooms',foods='$foods',status='$status'";
$sql = "insert into orders(times,rooms,foods,status) values ($times,$rooms,$foods,$status)";
mysqli_query($conn, $sql);
// ngat ket noi voi database

mysqli_close($conn);
?>