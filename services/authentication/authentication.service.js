// import * as firebase from "firebase";
const firebase = require('firebase/app').default

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);