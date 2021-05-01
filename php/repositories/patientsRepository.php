<?php

class PatientsRepository {

	function fetch($query) {
		$conn = $GLOBALS['conn'];
		if ($conn->connect_error) {
			$response = ["err_message" => "DB_CONN_FAILED"];
		} else {
			$stmt = $conn->prepare("SELECT id, u_id, last_name, first_name, middle_initial FROM patients WHERE u_id = ? OR last_name = ? OR first_name = ? OR CONCAT(last_name, ' ', first_name) = ? OR CONCAT(first_name, ' ', last_name) = ? LIMIT 10");
			$stmt->bind_param('sssss', $query, $query, $query, $query, $query);
			$stmt->execute();
			$result = $stmt->get_result();
			$rows = array();
			while ($row = $result->fetch_assoc()) {
				$rows[] = $row;
			}
			if ($rows) {
				$response = ["response" => $rows];
			}
		}
		return $response;
	}

}
