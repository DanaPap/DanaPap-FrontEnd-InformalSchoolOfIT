// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to store a value in browser storage
function storeValue(key, value) {
  if (typeof Storage !== "undefined") {
    sessionStorage.setItem(key, value);
  } else {
    alert("Browser storage is not supported.");
  }
}

// Function to read a value from browser storage
function getValue(key) {
  if (typeof Storage !== "undefined") {
    return sessionStorage.getItem(key);
  } else {
    alert("Browser storage is not supported.");
    return null;
  }
}

// Function to handle radio button selection
function handleSelection() {
  var selectedLanguage = this.value;
  setCookie("language", selectedLanguage, 365);
  storeValue("language", selectedLanguage);
  console.log("Selected Language: " + selectedLanguage);
}

// Function to initialize the radio buttons
function initRadioButtons() {
  var languageCookie = getCookie("language");
  var storedLanguage = getValue("language");

  // Create the radio buttons dynamically
  var radioDiv = document.getElementById("radioDiv");
  var languages = ["en-US", "ro-RO"];
  languages.forEach(function (language) {
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "language";
    radio.value = language;
    radio.addEventListener("change", handleSelection);

    // Check if the language matches the cookie or stored value
    if (language === languageCookie || language === storedLanguage) {
      radio.checked = true;
    }

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(language));

    radioDiv.appendChild(radio);
    radioDiv.appendChild(label);
    radioDiv.appendChild(document.createElement("br"));
  });
}
