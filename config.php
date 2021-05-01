<?php

// Turn line below into a comment to enable PHP error reporting.
error_reporting(0);

/**
*
*	Environment can either be local or production
*
**/

$ENVIRONMENT = 'LOCAL';

/**
*
*	Database details and connection
*
**/

$db_host = 'localhost';
$db_name = 'o-dent';
$db_username = 'root';
$db_password = '';
$GLOBALS['conn'] = new mysqli($db_host, $db_username, $db_password, $db_name);

/**
*
*	Controller References
*
**/

include_once "php/controllers/Controller.php";
include_once "php/services/Service.php";
include_once "php/controllers/error404Controller.php";
include_once 'php/controllers/homeController.php';
include_once 'php/controllers/dashboardController.php';
include_once 'php/services/patientsService.php';
include_once 'php/repositories/patientsRepository.php';
include_once 'php/controllers/patientsController.php';