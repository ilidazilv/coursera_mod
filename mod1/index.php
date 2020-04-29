<?php
session_start();
include 'connection.php';
include_once 'client/start.html';
if($_SESSION['user_id']){
    include_once 'client/templates/user.html';
    if($_GET['status'] === 'done'){ echo '<br><span style="color: green">Done</span>';}
    if($_GET['status'] === 'deleted'){ echo '<br><span style="color: red">Deleted</span>';}
    $stmt = $connection->prepare('SELECT first_name, headline FROM Profile WHERE user_id = :em');
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
        $url = $row[$i]['first_name'];
        echo "<tr><td><a href=\"view.php?profile_id=$url\">";
        echo $row[$i]['first_name'];
        echo '</a></td>';
        echo '<td>';
        echo $row[$i]['headline'];
        echo '</td>';
        echo "<td><a href=\"edit.php?profile_id=$url\">Edit</a> <a href=\"delete.php?profile_id=$url\">Delete</a></td>";
        echo '</tr>';
    }
} else {
    include_once 'client/templates/nonUser.html';
    $stmt = $connection->query('SELECT first_name, headline FROM Profile');
    $row = $stmt->fetchAll();
    echo '
<table border="1">
    <tr>
        <td>Name</td>
        <td>Headline</td>
    </tr>';
    for($i = 0; $i < sizeof($row);$i++){
        $url = $row[$i]['first_name'];
        echo "<tr><td><a href=\"view.php?profile_id=$url\">";
        echo $row[$i]['first_name'];
        echo '</a></td>';
        echo '<td>';
        echo $row[$i]['headline'];
        echo '</td>';
        echo '</tr>';
    }
}

echo '</table>';
include_once 'client/end.html';
