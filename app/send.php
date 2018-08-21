<?php
$field_email = 'cleancode.me@gmail.com';// откуда будут слаться письма
$name  = stripslashes($_POST['name']);
$phone = stripslashes($_POST['phone_number']);
$email = stripslashes($_POST['email']);
$mail_to = 'dimedrolll97@gmail.com';
$subject = 'обратная связь';
$body_message = '
<html>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <body> 
        <p>
            Имя: '.$name.'<br>
            Email: '.$email.'<br>
            Номер телефона: '.$phone.'<br>
        </p> 
    </body> 
</html>';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status=mail($mail_to, $subject, $body_message, $headers);
?>