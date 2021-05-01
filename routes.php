<?php 

/**
*
*	Set routes here
* 
*	$ROUTE['uri/'] = 'controller/function';
*	
*	To set default route, use $ROUTE['/']
*
**/

$ROUTE["/"] = "home/index";
$ROUTE["home/index"] = "home/index";
$ROUTE["dashboard/index"] = "dashboard/index";
$ROUTE["patients/view"] = "patients/view";
$ROUTE["patients/fetch"] = "patients/fetch";