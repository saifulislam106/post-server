// import firebase from 'firebase';

const firebase = require("firebase")



firebase.initializApp(firebaseConfig)
const bd = firebase.firestore();
const User = bd.collection("Users");

module.exports = {
  firebase,
  bd,
  User
}
