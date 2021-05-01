var search_results = document.querySelector("div#search-results");

function fetch(controller, query) {
    var xhr = new XMLHttpRequest();
    var url = "../" + String(controller) + "/fetch";
    xhr.timeout = 5000;

    xhr.onloadend = function () {
        console.clear();
        search_results.innerHTML = "";
        var response = JSON.parse(xhr.response)
        if (response != null) {
            response = response['response'];
            response.map(printToDOM);
            search_results.style.display = "block";
        }
        else {
            search_results.style.display = "none";
        }
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({"query": query,}));
}

function printToDOM(row) {
    console.log(row);
    var result_row = document.createElement("a");
    var u_id_section = document.createElement("section");
    var name_section = document.createElement("section");

    var u_id = String(row['u_id']).italics();
    var last_name = String(row['last_name']).bold();
    var first_name = String(row['first_name']);
    var name = last_name + " " + first_name;

    result_row.className = "result-row";
    u_id_section.id = "u_id_section";
    name_section.id = "name_section";

    u_id_section.innerHTML = u_id;
    name_section.innerHTML = name;
    result_row.append(u_id_section);
    result_row.append(name_section);
    result_row.href = "../patients/" + row['id'];

    search_results.append(result_row);
}