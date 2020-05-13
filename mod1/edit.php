<?php // line 1 added to enable color highlight
session_start();
include 'connection.php';
if($_SESSION['user_id']) {
    include_once 'client/start.html';

    $stmt = $connection->prepare('SELECT * FROM Profile WHERE profile_id=?');
    $stmt->execute(array($_GET['profile_id']));
    $row = $stmt->fetch();
    include_once 'client/templates/edit.html';
    if(isset($_POST['fm'])){
        $stmt = $connection->prepare('UPDATE Profile SET first_name=?, last_name=?, email=?, headline=?, summary=? 
WHERE profile_id=');
        $stmt->execute(array($_POST['fm'],$_POST['lm'],$_POST['em'],$_POST['hl'],$_POST['sm'],$row['profile_id']));
        header("Location: index.php?status=done");
    }
} else {
    header("Location: login.php");
}

include_once 'client/end.html';