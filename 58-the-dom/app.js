// // i. Get element of id “main-content” and assign them in a variable.

// let idMainCon = document.querySelectorAll("#main-content");

// // ii. Display all child elements of “main-content” element.

// Get element of id "main-content" and assign them to a variable
var mainContent = document.getElementById("main-content");

// Display all child elements of "main-content" element
var children = mainContent.children;
for (var i = 0; i < children.length; i++) {
  console.log(children[i]);
}

// Get all elements of class "render"
var renderElements = document.getElementsByClassName("render");

// Show their innerHTML
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}
// Get the input element with id "first-name"
var firstNameInput = document.getElementById("first-name");

// Fill the input value
firstNameInput.value = "Your Desired Value";
// Fill input value for element with id "last-name"
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Your Last Name";

// Fill input value for element with id "email"
var emailInput = document.getElementById("email");
emailInput.value = "your.email@example.com";
