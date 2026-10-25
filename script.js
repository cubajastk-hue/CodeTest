// Basic JavaScript logic for the page
// Attach click handler to the button with id "myButton"
// Basic JavaScript logic for the page
// Attach click handler to the button with id "myButton"
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', function () {
      // Show an alert when the button is clicked
      alert('Button was clicked!');
    });
  }
});