function validateContact(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMsg = document.getElementById("contactError");

    // Basic email pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required!";
        return false;
    }

    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address!";
        return false;
    }

    errorMsg.textContent = "";
    alert("Message sent successfully!");
    return true;
}
