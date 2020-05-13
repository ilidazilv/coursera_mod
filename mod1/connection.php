<?php


$servername = "localhost";
$username = "id13489049_ilidaz";
$password = "]vV<dWS]iW5933p";
$db = 'id13489049_assignment';

$connection = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
// set the PDO error mode to exception
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);