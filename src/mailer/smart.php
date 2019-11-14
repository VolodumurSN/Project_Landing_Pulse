<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                             

$mail->isSMTP();                                      
$mail->Host = 'smtp.ukr.net';  
$mail->SMTPAuth = true;                               
$mail->Username = 'vova6790@ukr.net';                 
$mail->Password = 'vV7787845';                           
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                   
 
$mail->setFrom('vova6790@ukr.net', 'Pulse');   
$mail->addAddress('vova77gh@gmail.com');    
//$mail->addAddress('ellen@example.com');               
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');   
$mail->isHTML(true);                                  

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>