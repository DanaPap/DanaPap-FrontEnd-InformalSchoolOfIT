function validateForm() {
  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Get form values
  var name = document.forms["registrationForm"]["name"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var phone = document.forms["registrationForm"]["phone"].value;
  var password = document.forms["registrationForm"]["password"].value;

  // Validate required fields
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    return false;
  }
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    return false;
  }
  if (phone === "") {
    document.getElementById("phoneError").textContent = "Phone number is required";
    return false;
  }
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    return false;
  }

  // Validate email format using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    return false;
  }

  // Validate phone number format using a regular expression
  var phoneRegex = /^\d{10}$/; // Assuming 10-digit phone number format
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Invalid phone number format";
    return false;
  }

  // Registration successful
  alert("Registration successful!");
  return true;
}

function loginForm() {
  // Reset error messages
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Get form values
  var email = document.forms["loginForm"]["email"].value;
  var password = document.forms["loginForm"]["password"].value;

  // Validate required fields
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    return false;
  }
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    return false;
  }

  // Authenticate user
  // Replace the following lines with your own authentication logic
  var storedEmail = "user@example.com"; // Replace with your stored email
  var storedPassword = "password123"; // Replace with your stored password

  if (email === storedEmail && password === storedPassword) {
    // Login successful
    alert("Login successful!");
    window.location.href = "profile.html"; // Redirect to profile page
    return true;
  } else {
    // Login failed
    alert("Invalid email or password");
    return false;
  }
}

function updateProfile() {
  // Get updated profile values
  var newName = document.getElementById("name").value;
  var newEmail = document.getElementById("email").value;
  var newPhone = document.getElementById("phone").value;

  // Update profile information
  // Replace the following lines with your own logic to update the user's profile
  // For example, you could send an AJAX request to the server to update the information in the database

  // Show success message
  document.getElementById("profileMessage").textContent = "Profile information updated successfully";
  document.getElementById("profileMessage").style.color = "green";
  return false; // Prevent form submission
}

function addPaymentMethod() {
  // Reset error messages
  document.getElementById("paymentMethodError").textContent = "";

  // Get new payment method values
  var cardNumber = document.getElementById("cardNumber").value;
  var cardName = document.getElementById("cardName").value;

  // Validate payment method fields
  if (cardNumber === "" || cardName === "") {
    document.getElementById("paymentMethodError").textContent = "Card number and name are required";
    return false;
  }

  // Add payment method logic
  // Replace the following lines with your own logic to add the payment method
  // For example, you could store the payment method information in the database

  // Create a new payment method element
  var paymentMethod = document.createElement("div");
  paymentMethod.className = "payment-method";
  paymentMethod.innerHTML =
    "<input type='text' value='" +
    cardNumber +
    "' disabled> " +
    "<input type='text' value='" +
    cardName +
    "' disabled> " +
    "<button onclick='removePaymentMethod(this)'>Remove</button>";

  // Append the new payment method to the payment methods container
  var paymentMethodsContainer = document.getElementById("paymentMethodsContainer");
  paymentMethodsContainer.appendChild(paymentMethod);

  // Clear payment method fields
  document.getElementById("cardNumber").value = "";
  document.getElementById("cardName").value = "";

  return false; // Prevent form submission
}

function removePaymentMethod(button) {
  // Remove the payment method element
  var paymentMethod = button.parentNode;
  paymentMethod.parentNode.removeChild(paymentMethod);
}

function calculateFare() {
  // Reset error messages
  document.getElementById("pickupError").textContent = "";
  document.getElementById("destinationError").textContent = "";

  // Get form values
  var pickup = document.getElementById("pickup").value;
  var destination = document.getElementById("destination").value;

  // Validate required fields
  if (pickup === "") {
    document.getElementById("pickupError").textContent = "Pickup location is required";
    return false;
  }
  if (destination === "") {
    document.getElementById("destinationError").textContent = "Destination is required";
    return false;
  }

  // Calculate estimated fare (replace with your own logic)
  var estimatedFare = Math.floor(Math.random() * 50) + 10; // Random fare between 10 and 59

  // Calculate estimated arrival time (replace with your own logic)
  var estimatedArrivalTime = Math.floor(Math.random() * 30) + 5; // Random arrival time between 5 and 34 minutes

  // Display fare and confirmation message
  var fareMessage = "Estimated fare: $" + estimatedFare;
  var arrivalTimeMessage = "Your driver will arrive in approximately " + estimatedArrivalTime + " minutes";
  document.getElementById("fareMessage").textContent = fareMessage;
  document.getElementById("arrivalTimeMessage").textContent = arrivalTimeMessage;

  return false; // Prevent form submission
}

var ridesPerPage = 5; // Number of rides to display per page
var currentPage = 1; // Current page number
var ridesData = []; // Placeholder for ride history data (replace with your own data)

// Function to display rides for the current page
function displayRides() {
  var rideContainer = document.getElementById("rideContainer");
  rideContainer.innerHTML = "";

  var startIndex = (currentPage - 1) * ridesPerPage;
  var endIndex = startIndex + ridesPerPage;

  for (var i = startIndex; i < endIndex && i < ridesData.length; i++) {
    var ride = ridesData[i];
    var rideElement = document.createElement("div");
    rideElement.className = "ride";
    rideElement.innerHTML =
      "<strong>Pickup Location:</strong> " +
      ride.pickupLocation +
      "<br><strong>Destination:</strong> " +
      ride.destination +
      "<br><strong>Fare:</strong> $" +
      ride.fare +
      "<br><strong>Driver:</strong> " +
      ride.driverName;
    rideContainer.appendChild(rideElement);
  }

  displayPagination();
}

// Function to display pagination buttons
function displayPagination() {
  var paginationContainer = document.getElementById("paginationContainer");
  paginationContainer.innerHTML = "";

  var totalPages = Math.ceil(ridesData.length / ridesPerPage);

  for (var i = 1; i <= totalPages; i++) {
    var button = document.createElement("button");
    button.textContent = i;
    button.onclick = function () {
      currentPage = parseInt(this.textContent);
      displayRides();
    };
    paginationContainer.appendChild(button);
  }
}

// Sample function to fetch ride history data (replace with your own logic)
function fetchRideHistory() {
  // Simulating fetching ride history data from the server
  setTimeout(function () {
    ridesData = [
      { pickupLocation: "Location A", destination: "Destination A", fare: 25, driverName: "Driver A" },
      { pickupLocation: "Location B", destination: "Destination B", fare: 30, driverName: "Driver B" },
      { pickupLocation: "Location C", destination: "Destination C", fare: 20, driverName: "Driver C" },
      { pickupLocation: "Location D", destination: "Destination D", fare: 35, driverName: "Driver D" },
      { pickupLocation: "Location E", destination: "Destination E", fare: 28, driverName: "Driver E" },
      { pickupLocation: "Location F", destination: "Destination F", fare: 32, driverName: "Driver F" },
      { pickupLocation: "Location G", destination: "Destination G", fare: 23, driverName: "Driver G" },
      { pickupLocation: "Location H", destination: "Destination H", fare: 27, driverName: "Driver H" },
      { pickupLocation: "Location I", destination: "Destination I", fare: 31, driverName: "Driver I" },
      { pickupLocation: "Location J", destination: "Destination J", fare: 29, driverName: "Driver J" },
    ];

    displayRides();
  }, 1000);
}

// Fetch ride history data when the page loads
window.onload = function () {
  fetchRideHistory();
};

function driverValidateForm() {
  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("vehicleError").textContent = "";
  document.getElementById("licensePlateError").textContent = "";

  // Get form values
  var name = document.forms["registrationForm"]["name"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var phone = document.forms["registrationForm"]["phone"].value;
  var vehicle = document.forms["registrationForm"]["vehicle"].value;
  var licensePlate = document.forms["registrationForm"]["licensePlate"].value;

  // Validate required fields
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    return false;
  }
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    return false;
  }
  if (phone === "") {
    document.getElementById("phoneError").textContent = "Phone number is required";
    return false;
  }
  if (vehicle === "") {
    document.getElementById("vehicleError").textContent = "Vehicle details are required";
    return false;
  }
  if (licensePlate === "") {
    document.getElementById("licensePlateError").textContent = "License plate is required";
    return false;
  }

  // Registration successful
  alert("Registration successful!");
  return true;
}

// Placeholder data (replace with your own data)
var acceptedRidesData = [
  { pickupLocation: "Location A", destination: "Destination A", passengerName: "Passenger A" },
  { pickupLocation: "Location B", destination: "Destination B", passengerName: "Passenger B" },
  { pickupLocation: "Location C", destination: "Destination C", passengerName: "Passenger C" },
];
var earningsData = {
  day: 50,
  week: 350,
  month: 1500,
};

function displayAcceptedRides() {
  var ridesContainer = document.getElementById("ridesContainer");
  ridesContainer.innerHTML = "";

  for (var i = 0; i < acceptedRidesData.length; i++) {
    var ride = acceptedRidesData[i];
    var rideElement = document.createElement("div");
    rideElement.className = "ride";
    rideElement.innerHTML =
      "<strong>Pickup Location:</strong> " +
      ride.pickupLocation +
      "<br><strong>Destination:</strong> " +
      ride.destination +
      "<br><strong>Passenger:</strong> " +
      ride.passengerName;
    ridesContainer.appendChild(rideElement);
  }
}

function displayEarnings() {
  var earningsContainer = document.getElementById("earningsContainer");
  earningsContainer.innerHTML = "";

  var earningsSummary = document.createElement("div");
  earningsSummary.className = "summary";
  earningsSummary.innerHTML =
    "<strong>Day:</strong> $" +
    earningsData.day +
    "<br><strong>Week:</strong> $" +
    earningsData.week +
    "<br><strong>Month:</strong> $" +
    earningsData.month;
  earningsContainer.appendChild(earningsSummary);
}

// Display accepted rides and earnings when the page loads
window.onload = function () {
  displayAcceptedRides();
  displayEarnings();
};

// Placeholder data (replace with your own data)
var rideData = {
  driverName: "Driver A",
  driverRating: 4.5,
  pickupAddress: "Pickup Location A",
  destinationAddress: "Destination A",
  fare: 25,
};

function displayRideDetails() {
  document.getElementById("driverName").textContent = rideData.driverName;
  document.getElementById("driverRating").textContent = rideData.driverRating;
  document.getElementById("pickupAddress").textContent = rideData.pickupAddress;
  document.getElementById("destinationAddress").textContent = rideData.destinationAddress;
  document.getElementById("fare").textContent = "$" + rideData.fare;

  // Display map with route (replace with your own map implementation)
  // Example map code using Google Maps JavaScript API
  var mapOptions = {
    zoom: 12,
    center: { lat: 47.15, lng: 23.86667 },
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

  var request = {
    origin: rideData.pickupAddress,
    destination: rideData.destinationAddress,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, function (result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    }
  });
}

// Display ride details when the page loads
window.onload = function () {
  displayRideDetails();
};
