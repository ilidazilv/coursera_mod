<?php


$servername = "localhost";
$username = "root";
$password = "password";
$db = 'assignment';

$connection = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
// set the PDO error mode to exception
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);