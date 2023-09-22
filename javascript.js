// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting by default

        // Validate name
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            return false;
        }

        // Validate email using a simple regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return false;
        }

        // If the form is valid, you can submit it to the server
        // You may use AJAX to submit the form data to your PHP script
        // Here, we'll just display a success message for demonstration purposes
        alert("Form submitted successfully!");
        contactForm.reset(); // Reset the form
    });
});
