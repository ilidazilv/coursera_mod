<?php // line 1 added to enable color highlight
session_start();
include 'connection.php';
if($_SESSION['user_id']) {
    include_once 'client/start.html';
    include_once 'client/templates/add.html';
    if($_POST['fm']){
        $stmt = $connection->prepare('INSERT INTO Profile(user_id, first_name, last_name, email, headline, summary) 
VALUES ( :uid, :fn, :ln, :em, :he, :su)');
        $stmt->execute(array(
                ':uid' => $_SESSION['user_id'],
                ':fn' => $_POST['fm'],
                ':ln' => $_POST['lm'],
                ':em' => $_POST['em'],
                ':he' => $_POST['hl'],
                ':su' => $_POST['sm'])
        );
        header("Location: index.php?status=done");
    }
} else {
    header("Location: login.php");
}

include_once 'client/end.html';