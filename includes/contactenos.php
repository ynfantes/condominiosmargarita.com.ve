<?php
$r = Array();
$message= "De: ".$_POST["nombres"].", ".$_POST['apellidos']." <".$_POST["email"]."><br><br>";
$message.="Telf.: ".$_POST['telefono']."<br><br>";
$message.="Email.: ".$_POST['email']."<br><br>";
$message.="<strong>Cuerpo del mensaje</strong><br>".str_replace("\n", "<br>", $_POST["mensaje"])."<br><br><br>";
$message.="------<br>";
$message.="Este mensaje se ha enviado desde un formulario de contacto en CondominiosMargarita (http://www.condominiosmargarita.com).ve";

$message = utf8_decode(stripslashes($message));
$headers = "Content-Language:es-ve\n";
$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
$headers .= "bcc:ynfantes@gmail.com\n";

$subject = "Contacto CondominiosMargarita";
$headers .= 'From: CondominiosMargarita <info@condominiosmargarita.com.ve>'."\r\n".'Reply-To:'.$_POST["email"]."\r\n" ;
$email = "info@condominiosmargarita.com.ve";

//$email = isset($_POST['token']) ? "info@sistemavaloriza.com" : "ynfantes@gmail.com";
if (mail($email,$subject,$message,$headers)) {
    $r['resultado'] = 'success';
    $r['mensaje'] = "¡Mensaje enviando con éxito! A la brevedad
    nos estaremos poniendo en contacto con usted. Gracias por contactarnos.";
} else {
    $r['resultado'] = 'danger';
    $r['mensaje'] = "Ocurrió un error al tratar de enviar el mensaje. Inténtelo nuevamente. Gracias por contactarnos.";
}
echo json_encode($r);