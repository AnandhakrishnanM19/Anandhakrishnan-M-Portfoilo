function sendMail() {
    let parms = {
        name: document.getElementById("name-field").value,
        email: document.getElementById("email-field").value,
        subject: document.getElementById("subject-field").value,
        message: document.getElementById("message-field").value
    };

    emailjs.send("service_afb8xwn", "template_xqccr1d", parms)
    .then(function(response) {
        alert("Email Sent Successfully!");
        console.log("SUCCESS!", response.status, response.text);
    })
    .catch(function(error) {
        alert("Failed to send email. Check console for details.");
        console.error("FAILED...", error);
    });
}
