// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0DY1ERLF9w24rRsGd8OhIV3gHtq_IRN0",
  authDomain: "limitless-tourism.firebaseapp.com",
  projectId: "limitless-tourism",
  storageBucket: "limitless-tourism.appspot.com",
  messagingSenderId: "84094610734",
  appId: "1:84094610734:web:f7b54a9f5ea1fa1a7c5ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;