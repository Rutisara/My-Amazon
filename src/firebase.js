
// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyABCLNWHrG2jn-GvI-sGahz2G0nD82SPLk",
  authDomain: "snit-37e48.firebaseapp.com",
  projectId: "snit-37e48",
  storageBucket: "snit-37e48.appspot.com",
  messagingSenderId: "315262888198",
  appId: "1:315262888198:web:bcf5c95cafa9125261d687",
  measurementId: "G-9G5BWKJ3ER",

};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth ,db };
  
  
  
  
  
 