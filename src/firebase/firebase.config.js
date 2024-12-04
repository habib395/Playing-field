// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmGtpx6nbB8nqvvwxuolxsVW5y85fx29U",
  authDomain: "assignment-ten-ph.firebaseapp.com",
  projectId: "assignment-ten-ph",
  storageBucket: "assignment-ten-ph.firebasestorage.app",
  messagingSenderId: "1051382176002",
  appId: "1:1051382176002:web:f54a4d754a9825f9f88a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth