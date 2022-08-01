<?php
include './includes/constants.php';
include './includes/mailto.php';
//define("SMTP_SERVER","mail.administradorasac.com");
//define("PORT",25);
//define("USER_MAIL","pagoscondominio@administradorasac.com");
//define("PASS_MAIL","10537439");
//define("SMTP",2);
$mail = new mailto(SMTP);
echo("enviando......<br>");
$r = $mail->enviar_email(TITULO, "Este es un mensaje de prueba", '', "info@pronet21.com.ve", "Edgar Messia");
echo("enviado");                    
if ($r=='') {
    echo(".- Mensaje enviado a Ok!\n");
} else {
    echo(".- Mensaje enviado a Fallo\n");
}