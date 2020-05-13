<?php
include 'connection.php';
$stmt = $connection->prepare('SELECT * FROM Profile WHERE profile_id = :em');
$stmt->execute(array(
    ':em' => $_GET['profile_id']
));
$row = $stmt->fetch();
include_once 'client/start.html';
?>

<p>First name: <?php echo $row['first_name']?></p><br>
<p>Last name: <?php echo $row['last_name']?></p><br>
<p>Email: <?php echo $row['email']?></p><br>
<p>Headline: <?php echo $row['headline']?></p><br>
<p>Summary: <?php echo $row['summary']?></p><br>
<button onclick="window.location = 'index.php'">Back</button>