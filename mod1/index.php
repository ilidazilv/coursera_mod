<?php
session_start();
include 'connection.php';
include_once 'client/start.html';
if(isset($_SESSION['user_id'])){
    include_once 'client/templates/user.html';
    if(isset($_GET['status']) && $_GET['status'] === 'added'){ echo '<br><span style="color: green">added</span>';}
    if(isset($_GET['status']) && $_GET['status'] === 'deleted'){ echo '<br><span style="color: red">Deleted</span>';}
    $stmt = $connection->prepare('SELECT profile_id,first_name, headline, last_name FROM Profile WHERE user_id = :em');
    $stmt->execute(array(
        ':em' => $_SESSION['user_id']
    ));
    $row = $stmt->fetchAll();
    echo '
<table border="1">
    <tr>
        <td>Name</td>
        <td>Headline</td>
        <td>Actions</td>
    </tr>';
    for($i = 0; $i < sizeof($row);$i++){
        $urlID = $row[$i]['profile_id'];
        $url = $row[$i]['first_name'];
        $help = $row[$i]['headline'];
        $last = $row[$i]['last_name'];
        echo "<tr><td><a href=\"view.php?profile_id=$urlID\">$url $last</a></td><td>$help</td><td><a href=\"edit.php?profile_id=$urlID\">Edit</a> <a href=\"delete.php?profile_id=$urlID\">Delete</a></td></tr>";
    }
} else {
    include_once 'client/templates/nonUser.html';
    $stmt = $connection->query('SELECT profile_id,first_name, headline, last_name FROM Profile');
    $row = $stmt->fetchAll();
    echo '
<table border="1">
    <tr>
        <td>Name</td>
        <td>Headline</td>
    </tr>';
    for($i = 0; $i < sizeof($row);$i++){
        $urlID = $row[$i]['profile_id'];
        $url = $row[$i]['first_name'];
        $help = $row[$i]['headline'];
        $last = $row[$i]['last_name'];
        echo "<tr><td><a href=\"view.php?profile_id=$urlID\">$url $last</a></td><td value=\"$help\">$help</td></tr>";
    }
}

echo '</table>';
echo '<a href="add.php">Add New Entry</a>';
include_once 'client/end.html';
