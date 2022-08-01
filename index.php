<?php
include_once 'includes/constants.php';

if (!isset($_GET['accion'])) {
    echo $twig->render('index.html.twig');
} else {
   echo $twig->render($_GET['accion'].'.html.twig');
}
