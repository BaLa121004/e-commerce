import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"; // Import Firebase Authentication


const firebaseConfig = {
  apiKey: "AIzaSyB86KGoHAg3Dpf4joT8LvzGlBXJi79Oslg",
  authDomain: "z-mart-169a8.firebaseapp.com",
  projectId: "z-mart-169a8",
  storageBucket: "z-mart-169a8.appspot.com",
  messagingSenderId: "1032425374391",
  appId: "1:1032425374391:web:8250c7eb7144a9b7900332",
  measurementId: "G-ZZNSWEPZGN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpForm = document.querySelector("#sign-up")
signUpForm.addEventListener("submit", e => {
  e.preventDefault()  
  const email = signUpForm['sign-up-email'].value
  const password = signUpForm['sign-up-pass'].value
  
  createUserWithEmailAndPassword(auth,email, password)
  .then(cred =>{
    console.log(cred.user)
    alert("Sign Up Successull")
    window.location.href = '../index.html'
  })
  .catch(err => console.log("ERRORRRRR             " , err))
})

const signInForm =  document.querySelector("#sign-in")
signInForm.addEventListener('submit', e => {
  e.preventDefault()
  
  const email = signInForm['sign-in-email'].value
  const password = signInForm['sign-in-pass'].value

  signInWithEmailAndPassword( auth, email, password )
    .then((cred) => {
      window.location.href = "../index.html";
      const user = cred.user;npm 
      console.log(user);
    })
    .catch(err => alert(err.message))
  })