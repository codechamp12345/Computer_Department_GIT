document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formStatus = document.getElementById('formStatus');

    if (name && email && message) {
        formStatus.textContent = "Thank you for your feedback!";
        formStatus.style.color = "green";
    } else {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
    }

    // Clear the form
    document.getElementById('feedbackForm').reset();
});

