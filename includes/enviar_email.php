<?php
$r = Array();
$message= "De: ".$_POST["nombre"]." <".$_POST["email"]."><br><br>";
$message.="Telf.: ".$_POST['telefono']."<br><br>";
$message.="Asunto: ".$_POST["asunto"]."<br><br>";
$message.="Cuerpo del mensaje<br>".str_replace("\n", "<br>", $_POST["mensaje"])."<br><br><br>";
$message.="------<br>";
$message.="Este mensaje se ha enviado desde un formulario de contacto en Inmobiliaria Nef (http://www.inmobiliarianef.com)";

$message = utf8_decode(stripslashes($message));
$headers = "Content-Language:es-ve\n";
$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
$headers .= "bcc:ynfantes@gmail.com\n";

$subject = "Contacto Inmobiliaria Nef";
$headers .= 'From: Inmobiliaria Nef <info@inmobiliarianef.com>'."\r\n".'Reply-To:'.$_POST["email"]."\r\n" ;
$email = "info@inmobiliarianef.com";

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