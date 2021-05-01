<?php

class PatientsService {

	function fetch($data) {
		$query = $data['query'];
		$repo = new PatientsRepository();
		$rows = $repo->fetch($query);
		return $rows;
	}

}
