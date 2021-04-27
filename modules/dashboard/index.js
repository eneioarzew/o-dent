patients = {
    "21-00015132": {
        "id": "21-00015132",
        "last-name": "Ontina",
        "first-name": "Julac Raphael",
        "middle-initial": "V",
    },
    "21-00023623": {
        "id": "21-00023623",
        "last-name": "Ontina",
        "first-name": "Joan",
        "middle-initial": "V",
    },
    "21-00015131": {
        "id": "21-00015131",
        "last-name": "Ontina",
        "first-name": "Julac Raphael",
        "middle-initial": "V",
    },
    "21-00023621": {
        "id": "21-00023621",
        "last-name": "Ontina",
        "first-name": "Joan",
        "middle-initial": "V",
    },
}

transactions = {
    "21-00000012": {
        "id": "21-00000012",
        "patient-id": "21-00015132",
        "date-created": "05/12/2020",
    },
    "21-00000011": {
        "id": "21-00000011",
        "patient-id": "21-00023623",
        "date-created": "03/12/2020",
    },
}

recent_logs = {
    "21-000000354": {
        "id": "21-000000354",
        "date-created": "05/12/2020",
    },
    "21-000000355": {
        "id": "21-000000355",
        "date-created": "03/12/2020",
    },
}

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

loadPatients()
loadTransactions()
loadLogs()