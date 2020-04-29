<?php
session_start();
include_once 'connection.php';
if($_SESSION['user_id'] ){
    include_once 'client/start.html';
    include_once 'client/templates/delete.html';
    if($_POST['yes'] != false){
        $stmt = $connection->prepare('DELETE FROM Profile WHERE first_name =?');
        $stmt->execute(array($_POST['yes']));
        echo '<script type="text/javascript" >alert("Done");window.location="index.php"</script>';
    }
} else {
    header("Location: login.php");
}