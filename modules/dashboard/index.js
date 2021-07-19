function loadPatients() {
    patients_container = document.querySelector("#patients")

    if (Object.keys(patients).length == 0) {
        p = document.createElement("span")
        p.innerHTML = "No recent transactions".italics()
        transactions_container.append(p)
    }
    else {
        for (key in patients) {
            entry_row = document.createElement("div")
            entry_row.className = "entry-row"
            entry_row.id = "patient"

            section = document.createElement("section")
            section.id = "details"

            patient_id = document.createElement("id")
            patient_id.innerText = "#" + patients[key]["id"]
            patient_id.innerText.italics()

            last_name = patients[key]["last-name"].bold()

            patient_name = document.createElement("name")
            patient_name.innerHTML += last_name + ", " + patients[key]["first-name"] + " " + patients[key]['middle-initial']

            section.append(patient_id)
            section.append(patient_name)

            entry_row.append(section)

            section = document.createElement("section")
            section.id = "actions"

            button = document.createElement("a")
            button.href = "../patients/" + patients[key]["id"]
            button.className = "button button-fill"
            button.innerText = "View Details"

            section.append(button)

            entry_row.append(section)

            patients_container.append(entry_row)
        }
    }
}

function loadTransactions() {
    transactions_container = document.querySelector("#transactions")

    if (Object.keys(transactions).length == 0) {
        p = document.createElement("span")
        p.innerHTML = "No recent transactions".italics()
        transactions_container.append(p)
    }
    else {
        for (key in transactions) {
            entry_row = document.createElement("div")
            entry_row.className = "entry-row"
            entry_row.id = "transaction"

            section = document.createElement("section")
            section.id = "details"

            trans_id = document.createElement("id")
            trans_id.innerText = "#" + transactions[key]["id"]
            trans_id.innerText.italics()

            patient_id = document.createElement("patient-id")
            patient_id.innerText = "#" + transactions[key]["patient-id"]
            patient_id.innerText.italics()

            section.append(trans_id)
            section.append(patient_id)

            entry_row.append(section)

            section = document.createElement("section")
            section.id = "actions"

            button = document.createElement("a")
            button.href = "../transactions/" + transactions[key]["id"]
            button.className = "button button-fill"
            button.innerText = "View Details"

            section.append(button)

            entry_row.append(section)

            transactions_container.append(entry_row)
        }
    }
}

function loadLogs() {
    logs_container = document.querySelector(".entries-container#recent-logs")

    if (Object.keys(recent_logs).length == 0) {
        p = document.createElement("span")
        p.innerHTML = "No recent logs".italics()
        logs_container.append(p)
    }
    else {
        for (key in recent_logs) {
            entry_row = document.createElement("div")
            entry_row.className = "entry-row"
            entry_row.id = "recent-logs"

            section = document.createElement("section")
            section.id = "details"

            log_id = document.createElement("id")
            log_id.innerText = "#" + recent_logs[key]["id"]
            log_id.innerText.italics()

            date_created = document.createElement("date")
            date_created.innerText = recent_logs[key]["date-created"]
            date_created.innerText.italics()

            section.append(log_id)
            section.append(date_created)

            entry_row.append(section)

            logs_container.append(entry_row)
        }
    }
}

function patientFetch() {
    search_bar_input = search_bar.value
    fetch("patients", search_bar_input)
}

function clearError(field) {
    field.oninput = function () {
        if (field.value !== "") {
            setTimeout(function () {
                field.style.boxShadow = "0px 6px 6px -6px rgba(0, 0, 0, .3)"
            }, 100)
        }
    }
}

body = document.querySelector("body")

search_bar = document.querySelector("#search-bar")
search_bar.oninput = patientFetch

submit_button = document.querySelector("#submit-button")
form = document.querySelector("form #create-patient")
form_inputs = Array.from(document.querySelectorAll("form .form-input"))

form_inputs.forEach(clearError)

submit_button.onclick = function () {
    form_validity = true;
    for (i = 0; i < form_inputs.length; i++) {
        field = form_inputs[i]
        if (field.value === "") {
            field.style.boxShadow = "0px 0px 6px #E34848"
            form_validity = false;
        }
    }

    if (form_validity === true) {
        inputs = {}
        

        upload("patients", JSON.stringify(inputs))
    }
}

body.onclick = function () {
    search_results = document.querySelector("div#search-results");

    search_results.style.opacity = "0"
    
    setTimeout(function () {
        search_results.style.display = "none"
    }, 300)
}