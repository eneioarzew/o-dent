<?php

class PatientsController {

	public function fetch($query) {
		$service = new PatientsService();
		$response = $service->fetch($query);
		return $response;
	}

	public function upload() {
		return "FAIL";
	}

}