// document.addEventListener("DOMContentLoaded", function () {
//   console.log(
//     "DOM content has been fully loaded and is ready for manipulation."
//   );
// });

let currentStep = 1;
const form = document.getElementById("loanForm");

document.addEventListener("DOMContentLoaded", function () {
  var contactInput = document.getElementById("contact");
  var nextButton = document.getElementById("nextButton");

  // Disable the next button initially
  nextButton.disabled = true;

  // Add event listener for input changes
  contactInput.addEventListener("input", function () {
    // Enable the next button if the input is not empty, otherwise disable it
    var contactValue = contactInput.value;

    // Log the value to the console
    console.log("Contact Number:", contactValue);
    nextButton.disabled = contactInput.value.trim() === "";
  });
});

function nextStep(step) {
  var currentStep = document.getElementById("step" + step);
  var nextStep = document.getElementById("step" + (step + 1));

  if (step === 1) {
    var contactInput = document.getElementById("contact");
    var contactValue = contactInput.value.trim();
    if (contactValue === "") {
      alert("Please enter your contact number");
      return;
    } else {
      // You can use the contactValue here, for example, log it to the console
      console.log("Contact Number:", contactValue);
    }
  }

  currentStep.style.display = "none";
  if (nextStep) {
    nextStep.style.display = "block";
  }
}

function nextStep() {
  if (validateStep(currentStep)) {
    document.getElementById("step" + currentStep).style.display = "none";
    currentStep++;
    document.getElementById("step" + currentStep).style.display = "block";
  }
}

function prevStep() {
  document.getElementById("step" + currentStep).style.display = "none";
  currentStep--;
  document.getElementById("step" + currentStep).style.display = "block";
}

function validateStep(step) {
  // Perform validation for each step
  return true; // Return true if validation passes, false otherwise
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateStep(currentStep)) {
    // Gather data from all steps and submit to API
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    fetch("http://localhost:8080/api/visitors/addVisitorData", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Handle success response
          console.log("Data submitted successfully");
        } else {
          // Handle error response
          console.error("Error submitting data");
        }
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }
});

// Open and close the city list
function toggleCityList() {
  var cityList = document.getElementById("cityList");
  if (cityList.style.width === "250px") {
    cityList.style.width = "0";
  } else {
    cityList.style.width = "250px";
  }
}

// Select a city
function selectCity(city) {
  console.log("Selected city: " + city);

  // You can perform any action here when a city is selected
}

function selectRadio(radio) {
  console.log("Selected city: " + radio);

  // You can perform any action here when a city is selected
}

//  BUSINSS DETAILS
var selectElement = document.getElementById("buisnesdetails");

// Add event listener to the select element
selectElement.addEventListener("change", function () {
  // Get the selected option
  var selectedOption = selectElement.options[selectElement.selectedIndex];

  // Get the value of the selected option
  var selectedValue = selectedOption.value;

  // Log the value to the console
  console.log("Selected Company Type:", selectedValue);
});



 
