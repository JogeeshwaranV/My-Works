// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBedIgZSVqrcOTohcrMDxA9LB8bRpIGZBM",
    authDomain: "hangman-94e49.firebaseapp.com",
    projectId: "hangman-94e49",
    storageBucket: "hangman-94e49.appspot.com",
    messagingSenderId: "1085544983860",
    appId: "1:1085544983860:web:f2d631059a82ced8b04961",
    measurementId: "G-HW1TLNFDWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let formRegister = document.getElementById("form");
let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((Credential) => {
            console.log(Credential);
            location.href = "./login.html";
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}
formRegister.addEventListener("submit", RegisterUser);


const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Email validation
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email address.';
    }

    // Validate password length
    if (password.length < 8) {
        passwordError.textContent ='Password must be at least 8 characters long.';
        return;
    }

    // Validate if the password contains at least one lowercase letter
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
        passwordError.textContent ='Password must contain at least one lowercase letter.';
        return;
    }

    // Validate if the password contains at least one uppercase letter
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        passwordError.textContent ='Password must contain at least one uppercase letter.';
        return;
    }

    // Validate if the password contains at least one number
    const numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
        passwordError.textContent ='Password must contain at least one number.';
        return;
    }

    // Validate if the password contains at least one special character
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    if (!specialCharRegex.test(password)) {
        passwordError.textContent ='Password must contain at least one special character.';
        return;
    }
    // Confirm Password validation
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
    }

    // If all validations pass, you can submit the form or perform other actions
    // form.submit(); // Uncomment this line to submit the form

});
