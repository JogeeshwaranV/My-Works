"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const amount = parseInt($("#cents").value);
    if (isNaN(amount) ) {
        alert("Please enter a valid number between 0 and 99.");
    }
    else if ( amount >= 0 && amount <= 99) {
        change(amount);
    } 
    else {
        alert("Please enter a valid number between 0 and 99.");
    }
};

const change = (cents) => {
    const quarters = Math.floor(cents/25);
    cents%=25;
    const dimes = Math.floor(cents/10);
    cents%=10;
    const nickels = Math.floor(cents/5);
    const pennies = cents%5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});
