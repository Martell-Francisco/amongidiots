// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGIqJag6Sj79zqLec4JmHVPQW984kBqdk",
  authDomain: "amongidiots-2299d.firebaseapp.com",
  projectId: "amongidiots-2299d",
  storageBucket: "amongidiots-2299d.appspot.com",
  messagingSenderId: "940996542367",
  appId: "1:940996542367:web:2350eb4eb966ece7ed47aa",
  measurementId: "G-GBWS6LTVHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);