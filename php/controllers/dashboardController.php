<?php

class DashboardController {

	public function index() {
		$controller = new Controller();
		return $controller->view('dashboard/index');
	}

}
