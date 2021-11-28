// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5iE27z4g6y3NUXOMgeBeIW6W21AFX2Ms",
  authDomain: "bloom-9ea06.firebaseapp.com",
  projectId: "bloom-9ea06",
  storageBucket: "bloom-9ea06.appspot.com",
  messagingSenderId: "947114638883",
  appId: "1:947114638883:web:ab50197005735bed277b96",
  measurementId: "G-8TFWYFVSZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);