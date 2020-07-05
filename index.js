// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * Function to reverse a string WITHOUT USING an inbuilt JavaScript String
 * "reverse()" function.
 */
function reverseString1(str) {
  /*
   * Check for the validity of input string.
   * If input string is invalid return appropriate message.
   */
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not valid";
  }
  /*
   * Take an empty Array to store string characters in reverse order.
   */
  const revArray = [];
  const length = str.length - 1;
  /*
   * Loop string characters in reverse order and store
   * it in an Array.
   */
  for (let i = length; i >= 0; i--) {
    revArray.push(str[i]);
  }
  /*
   * Join the Array elements to create string in 
   * reverse order.
   */
  return revArray.join("");
}

/**
 * Function to reverse a string USING an inbuilt JavaScript String
 * "reverse()" function.
 */
function reverseString2(str) {
  return str.split('').reverse().join('');
}

/**
 * Function to reverse a string USING an inbuilt JavaScript String 
 * "reverse()" function and "Spread" operator.
 */
function reverseString3(str) {
  return [...str].reverse().join('');
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  /*
   * Perform operations on form submit.
   */
  let strSampleString = document.getElementById("idInpSampleString").value;
  document.getElementById("idSpanReversedString").innerHTML = reverseString1(
    strSampleString
  );
  /*
   * You must return "false" to prevent the default form behavior.
   */
  return false;
}

var form = document.getElementById("idFormStringReverse");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
