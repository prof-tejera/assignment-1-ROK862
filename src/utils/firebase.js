// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const abstract = () => {}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjgDxXJD6LdX2xNvRe2jEml6hjWhbLQ1M",
  authDomain: "cs39harvard.firebaseapp.com",
  projectId: "cs39harvard",
  storageBucket: "cs39harvard.appspot.com",
  messagingSenderId: "479314369399",
  appId: "1:479314369399:web:cf9023977e0124275d1f72",
  measurementId: "G-ND61GXC9L1"
};

// Initialize Firebase
abstract.firebase   = initializeApp(firebaseConfig,'CSCI39-Harvard-Fitness-App');
abstract.analytics  = getAnalytics(abstract.firebase);
abstract.database   = getDatabase(abstract.firebase);

export default abstract;