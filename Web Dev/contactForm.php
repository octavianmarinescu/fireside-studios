<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $emailTo = "marinescu.o@yahoo.com";
    $headers = "From: " . $emailFrom;
    $txt = "You have received an email from " . $name . ".\n\n".$message;

    mail($emailTo, $subject, $txt, $headers);

    // header("Location: index.html")
}

?>