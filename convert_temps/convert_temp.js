"use strict";
const $ = (selector) => document.querySelector(selector);

/*********************
 *  helper functions  *
 **********************/
const calculateCelsius = (temp) => ((temp - 32) * 5) / 9;
const calculateFahrenheit = (temp) => (temp * 9) / 5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
  $("#degree_label_1").textContent = label1Text;
  $("#degree_label_2").textContent = label2Text;
  $("#degrees_computed").value = "";
};

/****************************
 *  event handler functions  *
 *****************************/
const convertTemp = () => {
  const EnteredValue = parseFloat($("#degrees_entered").value);
  if (isNaN(EnteredValue)) {
    alert("Please enter a valid number");
  } else {
    let tempdegree;
    if ($("#to_fahrenheit").checked) {
      tempdegree=calculateFahrenheit(EnteredValue);
    } else {
      tempdegree=calculateCelsius(EnteredValue);
    }
    $("#degrees_computed").value = tempdegree.toFixed(0);
  }
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () =>
  toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
  // add event handlers
  $("#convert").addEventListener("click", convertTemp);
  $("#to_celsius").addEventListener("click", toCelsius);
  $("#to_fahrenheit").addEventListener("click", toFahrenheit);

  // move focus
  $("#degrees_entered").focus();
  $("#degrees_entered").select();
});
