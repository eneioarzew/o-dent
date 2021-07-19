function upload(controller, data) {
    var xhr = new XMLHttpRequest();
    var url = "../" + String(controller) + "/upload";
    xhr.timeout = 5000;

    xhr.onloadend = function () {
        search_results.innerHTML = "";
        var response = JSON.parse(xhr.response)
        if (response === "SUCCESS") {
            response = response['response'];
            response.map(printToDOM);
            successNotif()
        }
        else if (response === "FAIL") {
            failNotif()
        }
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ "data": data, }));
}

function successNotif() {
    notification = document.createElement('div')
    body = document.querySelector('body')

    notification.className = "notification"
    notification.innerText = "Successfully uploaded!"
    notification.setAttribute("good", "")

    body.append(notification)

    setTimeout(function () {
        notification.style.opacity = "1"
    }, 100)

    setTimeout(function () {
        notification.style.opacity = "0"
    }, 5100)

    setTimeout(function () {
        body.removeChild(notification)
    }, 5400)
}

function failNotif() {
    notification = document.createElement('div')
    body = document.querySelector('body')

    notification.className = "notification"
    notification.innerText = "Upload failed!"
    notification.setAttribute("bad", "")

    body.append(notification)

    setTimeout(function () {
        notification.style.opacity = "1"
    }, 100)

    setTimeout(function () {
        notification.style.opacity = "0"
    }, 5100)

    setTimeout(function () {
        body.removeChild(notification)
    }, 5400)
}