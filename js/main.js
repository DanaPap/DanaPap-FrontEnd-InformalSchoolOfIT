let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.forEach(function (collapse) {
      collapse.classList.remove("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});

function initMap() {
  // Replace the coordinates with the actual latitude and longitude of Santorini
  const santoriniCoordinates = { lat: 36.3932, lng: 25.4615 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: santoriniCoordinates,
    zoom: 12, // Adjust the zoom level as needed
  });

  const marker = new google.maps.Marker({
    position: santoriniCoordinates,
    map: map,
    title: "Santorini",
  });
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message has been sent!");
    document.getElementById("contactForm").reset();
  });

function checkAvailability() {
  // Add your custom logic to check availability.
  // For this example, we'll just simulate availability by randomly approving or rejecting the request.
  const isAvailable = Math.random() < 0.5; // Simulate 50% chance of availability

  if (isAvailable) {
    alert(
      "The selected dates are available. You can proceed with the booking."
    );
    // Enable the "Book Now" button
    document.getElementById("bookNowBtn").disabled = false;
  } else {
    alert(
      "Sorry, the selected dates are not available. Please choose different dates."
    );
    // Disable the "Book Now" button
    document.getElementById("bookNowBtn").disabled = true;
  }
}

function simulateBooking() {
  // Get form input values
  const checkInDate = document.getElementById("checkInDate").value;
  const checkOutDate = document.getElementById("checkOutDate").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;

  // You can add any desired validation here before proceeding with the booking simulation

  // Simulate booking process (show booking message)
  const bookingMessage = `Booking details: 
      Check-In Date: ${checkInDate}
      Check-Out Date: ${checkOutDate}
      Adults: ${adults}
      Children: ${children}`;

  alert("Booking has been made successfully!\n" + bookingMessage);

  // Reset form data
  resetForm();
}

function resetForm() {
  document.getElementById("checkInDate").value = "";
  document.getElementById("checkOutDate").value = "";
  document.getElementById("adults").selectedIndex = 0;
  document.getElementById("children").selectedIndex = 0;
  document.getElementById("bookNowBtn").disabled = true; // Disable the "Book Now" button after booking
}

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    testimonials[currentTestimonialIndex].style.display = "none";
    testimonials[index].style.display = "block";
    currentTestimonialIndex = index;
  }

  function cycleTestimonials() {
    const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }

  // Show the first testimonial initially
  showTestimonial(0);

  // Set interval to cycle through testimonials
  setInterval(cycleTestimonials, 5000); // Change interval as needed
});

