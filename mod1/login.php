<?php
session_start();
include 'connection.php';
if(!isset($_SESSION['user_id'])) {
    if (isset($_POST['cancel'])) {
        header('Location: index.php');
    }

    if (isset($_POST['email'])) {
        $salt = 'XyZzy12*_';
        $check = hash('md5', $salt . $_POST['pass']);
        $stmt = $connection->prepare('SELECT user_id, name FROM users WHERE email = :em AND password = :pw');
        $stmt->execute(array(':em' => $_POST['email'], ':pw' => $check));
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row !== false) {
            $_SESSION['name'] = $row['name'];
            $_SESSION['user_id'] = $row['user_id'];
            header("Location: index.php");
            return;
        } else {
            include_once 'client/start.html';
            echo '<h2 style="color:red;">Invalid pass or email</h2>';
            include_once 'client/templates/login.html';
            include_once 'client/end.html';
        }
    } else {
        include_once 'client/start.html';
        include_once 'client/templates/login.html';
        include_once 'client/end.html';
    }
} else {
    header("Location: index.php");
}