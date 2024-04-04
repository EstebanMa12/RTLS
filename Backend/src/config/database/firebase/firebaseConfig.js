// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkOCyb4LsMCZ1DLzH3Od4W--Jc-Zv5dfQ",
  authDomain: "rtls-28ef5.firebaseapp.com",
  projectId: "rtls-28ef5",
  storageBucket: "rtls-28ef5.appspot.com",
  messagingSenderId: "256785657703",
  appId: "1:256785657703:web:418f063d2bb73481c289c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

module.exports = {
    db,
    auth
}