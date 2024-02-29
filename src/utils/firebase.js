// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoVlarGRqlGticMrXfdajaBif_4LIjf68",
  authDomain: "todoapp-cbf49.firebaseapp.com",
  projectId: "todoapp-cbf49",
  storageBucket: "todoapp-cbf49.appspot.com",
  messagingSenderId: "1031049967399",
  appId: "1:1031049967399:web:360af667fb6757eacadb02",
  measurementId: "G-Z71JV07M3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);