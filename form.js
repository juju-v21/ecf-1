function sendRequest(event) {
    event.preventDefault();
    if (ValidateEmail()) {
        fetch("script.php", {
                method: "POST",
                body: new FormData(document.querySelector('form'))
            })
            .then((data) => data.json())
            .then((json) => console.log(json.response))
    }
}


function ValidateEmail() {
    let mail = document.querySelector('input[name=email]');
    let confmail = document.querySelector('input[name=confirmationemail]');
    return (mail.value === confmail.value);
}

function confirmEmail() {
    const email = document.getElementById("emailAddress").value
    const confemail = document.getElementById("confirmationemail").value
    const confemailA = document.getElementById("confirmationemail")
    const emailA = document.getElementById("emailAddress")
    if (email != confemail) {
        alert('Email Not Matching!');
        emailA.classList.add("bordure");
        confemailA.classList.add("bordure");
    } else {
        emailA.classList.remove("bordure");
        confemailA.classList.remove("bordure");

    }
}

function messageVide() {
    const x = document.getElementById("msg").value
    const x1 = document.getElementById("msg")
    if (x == null || x == "") {
        alert('message stp');
        x1.classList.add("bordure");
    } else {
        x1.classList.remove("bordure");
    }
}