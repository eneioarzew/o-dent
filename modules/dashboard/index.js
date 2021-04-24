patients = {
    "15132": {
        "id": 15132,
        "last-name": "Ontina",
        "first-name": "Julac Raphael",
        "middle-initial": "V",
    },
    "23623": {
        "id": 23623,
        "last-name": "Ontina",
        "first-name": "Joan",
        "middle-initial": "V",
    },
}

function loadPatients() {
    patients_container = document.querySelector("#patients");
    entries_container = document.querySelector("div.entries-container#patients")

    for (key in patients) {
        entry_row = document.createElement("div");
        entry_row.className = "entry-row";
        entry_row.id = "patient";

        section = document.createElement("section");
        section.id = "details";

        patient_id = document.createElement("id");
        patient_id.innerText = "#" + patients[key]["id"];
        patient_id.innerText.italics();
        
        last_name = patients[key]["last-name"].bold();

        patient_name = document.createElement("name");
        patient_name.innerHTML += last_name + ", " + patients[key]["first-name"] + " " + patients[key]['middle-initial']
        
        section.append(patient_id)
        section.append(patient_name)

        entry_row.append(section)

        section = document.createElement("section");
        section.id = "actions";

        button = document.createElement("a");
        button.href = "../patients/" + patients[key]["id"];
        button.className = "button button-fill";
        button.innerText = "View Details";

        section.append(button);

        entry_row.append(section);

        entries_container.append(entry_row);
    }
}

loadPatients();