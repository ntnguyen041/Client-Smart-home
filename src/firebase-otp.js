// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZijuSXDdxhUluXdaZMaS3j7rJ6Tqt95g",
  authDomain: "smarthomereactnative.firebaseapp.com",
  projectId: "smarthomereactnative",
  storageBucket: "smarthomereactnative.appspot.com",
  messagingSenderId: "920737450323",
  appId: "1:920737450323:web:b3cf1cb60050058638f9a6",
  measurementId: "G-T8D5KD4ZPC",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication =getAuth(app);
