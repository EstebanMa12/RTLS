// Import the functions you need from the SDKs you need

const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

const admin = require("firebase-admin");

const serviceAccount = require("../../../../fb-config.json");

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();
const db = getFirestore(app);

module.exports = {
  db,
  auth,
  admin
}

// const firebaseConfig = {
//   apiKey: "AIzaSyDkOCyb4LsMCZ1DLzH3Od4W--Jc-Zv5dfQ",
//   authDomain: "rtls-28ef5.firebaseapp.com",
//   projectId: "rtls-28ef5",
//   storageBucket: "rtls-28ef5.appspot.com",
//   messagingSenderId: "256785657703",
//   appId: "1:256785657703:web:418f063d2bb73481c289c2"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);