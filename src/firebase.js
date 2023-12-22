import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6Ow8NHYeNm2zVljsS7GJtMIOxYsn4epo",
  authDomain: "smishify-3cbd2.firebaseapp.com",
  projectId: "smishify-3cbd2",
  storageBucket: "smishify-3cbd2.appspot.com",
  messagingSenderId: "284994674846",
  appId: "1:284994674846:web:533cae68950e73615e5b8f",
  measurementId: "G-88KKWF86W1"
};
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;

// npm install firebase
//  npm install firebase-tools

//use redux to store this info
// npm install react-redux
// and its tools : npm install @reduxjs/toolkit