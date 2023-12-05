 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import { getDatabase , set , ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
 import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
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
 const db = getDatabase();
 const auth= getAuth(app);
 const dbref= ref(db);

 let email=document.getElementById("email");
 let password=document.getElementById("password");
 let LoginForm=document.getElementById("form");
 let loginUser = evt =>{
     evt.preventDefault();

     signInWithEmailAndPassword(auth, email.value , password.value)
     .then((Credential) =>{
         console.log(Credential);
         location.href="./hangman.html";
     })
     .catch((error)=>{
         alert(error.message);
         console.log(error.code);
         console.log(error.message);
     })
 }
LoginForm.addEventListener("submit",loginUser);