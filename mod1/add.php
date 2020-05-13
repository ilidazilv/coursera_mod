<?php // line 1 added to enable color highlight
session_start();
include 'connection.php';
if(isset($_SESSION['user_id'])) {
    include_once 'client/start.html';
    include_once 'client/templates/add.html';
    if(isset($_POST['first_name'])){
        $stmt = $connection->prepare('INSERT INTO Profile(user_id, first_name, last_name, email, headline, summary) VALUES ( :uid, :fn, :ln, :em, :he, :su)');
        $stmt->execute(array(
                ':uid' => $_SESSION['user_id'],
                ':fn' => $_POST['first_name'],
                ':ln' => $_POST['last_name'],
                ':em' => $_POST['email'],
                ':he' => $_POST['headline'],
                ':su' => $_POST['summary'])
        );
        echo '<script>window.location = "index.php?status=added"</script>';
    }
} else {
    header("Location: login.php");
}

include_once 'client/end.html';