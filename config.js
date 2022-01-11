import firebase from "firebase";
//require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCUWS4AlB-1ETvSSscUFDzwm1qso1jM-pg",
  authDomain: "pro-71-f3bdc.firebaseapp.com",
  projectId: "pro-71-f3bdc",
  storageBucket: "pro-71-f3bdc.appspot.com",
  messagingSenderId: "811505428379",
  appId: "1:811505428379:web:7915a848bd2d7a8e7ba33e"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();


