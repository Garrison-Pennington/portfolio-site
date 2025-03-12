// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBil4IMa-Vb8guPwOC_P-hrO7OJrEl3oDs",
  authDomain: "personal-portfolio-453501.firebaseapp.com",
  projectId: "personal-portfolio-453501",
  storageBucket: "personal-portfolio-453501.firebasestorage.app",
  messagingSenderId: "617229473026",
  appId: "1:617229473026:web:ef401a238db1286f629e1b",
  measurementId: "G-6D7MZ7DMGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
