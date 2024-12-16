// JavaScript code for basic interactivity

// Alert when the page loads
window.onload = function () {
    alert("Welcome to Tutoroot! Explore our platform to find the best tutoring services.");
};

// Validate the contact form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all the fields in the form.");
    } else {
        alert(`Thank you, ${name}! We have received your message and will get back to you soon.`);
        // Optionally reset the form
        this.reset();
    }
});

// Alert when clicking on "Learn More" buttons
document.querySelectorAll(".card-button").forEach(function (button) {
    button.addEventListener("click", function () {
        alert("This feature is coming soon! Stay tuned for updates.");
    });
});

// Alert when hovering over the navbar links
document.querySelectorAll(".navbar-menu a").forEach(function (link) {
    link.addEventListener("mouseenter", function () {
        console.log(`You hovered over: ${this.textContent}`);
    });
});
