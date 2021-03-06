// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbFn1xVs1JoHMjQMKegn8Jtab-Q5C3oX8",
  authDomain: "piksel-512fa.firebaseapp.com",
  projectId: "piksel-512fa",
  storageBucket: "piksel-512fa.appspot.com",
  messagingSenderId: "359961571838",
  appId: "1:359961571838:web:639ba0a7d2adf3f155d0af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
