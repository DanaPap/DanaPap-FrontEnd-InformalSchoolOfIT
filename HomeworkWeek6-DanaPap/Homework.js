var contactForm = document.getElementById("contact-form");
var firstNameSpan = document.getElementById("first-name");
var alertMessage = document.getElementById("alert-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting

  var firstName = document.getElementById("firstname").value;

  firstNameSpan.textContent = firstName;

  // Show the confirmation banner
  var confirmationBanner = document.getElementById("confirmation-banner");
  confirmationBanner.classList.remove("hidden");

  // Display the alert message
  alertMessage.textContent =
    " ✅ Thank you for submitting the form, " + firstName + "!";
  alertMessage.classList.remove("hidden");

  // Set the background color of the alert message to green
  alertMessage.style.backgroundColor = "#21b7a6";
  alertMessage.style.color = "white";

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  })
});
