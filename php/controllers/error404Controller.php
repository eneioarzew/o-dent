<?php

class Error404Controller {

	public function index() {
		$controller = new Controller();
		return $controller->view('error404/index');
	}

}
