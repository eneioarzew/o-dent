search_results = document.querySelector("div#search-results");

function fetch(controller, query) {
    xhr = new XMLHttpRequest();
    url = "../" + String(controller) + "/fetch";
    xhr.timeout = 5000;

    xhr.onloadend = function () {
        search_results.innerHTML = "";

        response = JSON.parse(xhr.response)

        if (response != null) {
            body = response['response'];
            if (body) {
                body.map(printToDOM);
            }
            else {
                return;
            }
        }
        search_results.style.display = "block"

        setTimeout(function () {
            search_results.style.opacity = "1"
        }, 100)
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ "query": query, }));
}

function printToDOM(row) {
    result_row = document.createElement("a");
    u_id_section = document.createElement("section");
    name_section = document.createElement("section");

    u_id = String(row['u_id']).italics();
    last_name = String(row['last_name']).bold();
    first_name = String(row['first_name']);
    name = last_name + " " + first_name;

    result_row.className = "result-row";
    u_id_section.id = "u_id_section";
    name_section.id = "name_section";

    u_id_section.innerHTML = u_id;
    name_section.innerHTML = name;
    result_row.append(u_id_section);
    result_row.append(name_section);
    result_row.href = "../patients/view/" + row['id'];

    search_results.append(result_row);
}