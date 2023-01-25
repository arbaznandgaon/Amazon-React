// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY_1ygve6KVXoZrGWb6yKQZc0QB_kDEzY",
  authDomain: "clone-3b830.firebaseapp.com",
  projectId: "clone-3b830",
  storageBucket: "clone-3b830.appspot.com",
  messagingSenderId: "188708931280",
  appId: "1:188708931280:web:7954934877ab9662a900d5",
  measurementId: "G-CM5T8WN7V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;