<?php
date_default_timezone_set("America/Caracas");
define("mailPHP",0);
define("sendMail",1);
define("SMTP",2);

$debug = false;
$sistema = "/condominiosmargarita.com.ve/";
$email_error = false;
$mostrar_error = true;
$programa_correo = mailPHP;
if ($_SERVER['SERVER_NAME'] == "condominiosmargarita.com.ve" | $_SERVER['SERVER_NAME'] == "www.condominiosmargarita.com.ve") {
    
    $user = "";
    $password = "";
    $db = "";
    $email_error = true;
    $mostrar_error = true;
    $debug = true;
    $sistema = "/";
    $programa_correo = SMTP;
} else {
    $user = "root";
    $password = "";
    $db = "";
}

define("HOST", "localhost");
define("USER", $user);
define("PASSWORD", $password);
define("DB", $db);
define("SISTEMA", $sistema);
define("EMAIL_ERROR", $email_error);
define("EMAIL_CONTACTO", "ynfantes@gmail.com");
define("EMAIL_TITULO", "error");
define("MOSTRAR_ERROR", $mostrar_error);
define("DEBUG", $debug);

define("TITULO", "Condominios Margarita V&A, C. A.");
define("ROOT", 'http://' . $_SERVER['SERVER_NAME'] . SISTEMA);
define("URL_SISTEMA", ROOT . "enlinea");
define("URL_INTRANET", ROOT . "intranet");
define("SERVER_ROOT", $_SERVER['DOCUMENT_ROOT'] . SISTEMA);
define("TEMPLATE", SERVER_ROOT . "/template/");
define("PROGRAMA_CORREO",$programa_correo);
define("NOMBRE_APLICACION","Condominio en Línea");
define("ACTUALIZ","data/");
define("ARCHIVO_INMUEBLE","INMUEBLE.txt");
define("ARCHIVO_CUENTAS","CUENTAS.txt");
define("ARCHIVO_FACTURA","FACTURA.txt");
define("ARCHIVO_FACTURA_DETALLE","FACTURA_DETALLE.txt");
define("ARCHIVO_JUNTA_CONDOMINIO","JUNTA_CONDOMINIO.txt");
define("ARCHIVO_PROPIEDADES","PROPIEDADES.txt");
define("ARCHIVO_PROPIETARIOS","PROPIETARIOS.txt");
define("ARCHIVO_EDO_CTA_INM","EDO_CUENTA_INMUEBLE.txt");
define("ARCHIVO_CUENTAS_DE_FONDO","CUENTAS_FONDO.txt");
define("ARCHIVO_MOVIMIENTOS_DE_FONDO","MOVIMIENTO_FONDO.txt");
define("ARCHIVO_ACTUALIZACION","ACTUALIZACION.txt");
define("ARCHIVO_MOVIMIENTO_CAJA","MOVIMIENTO_CAJA.txt");
define("SMTP_SERVER","mail.condominiosmargarita.com.ve");                                 
define("PORT",25);
define("USER_MAIL","");
define("PASS_MAIL","");
define("MESES_COBRANZA",1000);
define("GRAFICO_FACTURACION",1);
define("GRAFICO_COBRANZA",1);
define("RECIBO_GENERAL",1);
define("MOVIMIENTO_FONDO",0);
define("GRUPOS",0);
define("DEMO",0);

//https://www.google.com/settings/u/1/security/lesssecureapps
//https://accounts.google.com/DisplayUnlockCaptcha
//https://security.google.com/settings/security/activity?hl=en&pli=1