// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhvHHZCPpgzNo-B9hc-vXidYq6Y3L37EE",
  authDomain: "login-otp-fc5b7.firebaseapp.com",
  projectId: "login-otp-fc5b7",
  storageBucket: "login-otp-fc5b7.appspot.com",
  messagingSenderId: "1000757861744",
  appId: "1:1000757861744:web:264e7c488f4cfe0ea583b5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication =getAuth(app);
 