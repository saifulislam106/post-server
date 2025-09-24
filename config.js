// import firebase from 'firebase';

const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyCCXBWNtBN6wcm2o5mxYcmuldZZRSYjqto",
  authDomain: "elias-2ce26.firebaseapp.com",
  projectId: "elias-2ce26",
  storageBucket: "elias-2ce26.firebasestorage.app",
  messagingSenderId: "228050217469",
  appId: "1:228050217469:web:3cdf48a79bd8f89175d194",
  measurementId: "G-RGW462J0SN"
};

firebase.initializApp(firebaseConfig)
const bd = firebase.firestore();
const User = bd.collection("Users");

module.exports = {
  firebase,
  bd,
  User
}