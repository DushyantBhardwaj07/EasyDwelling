// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "easydwelling-2dc5d.firebaseapp.com",
  projectId: "easydwelling-2dc5d",
  storageBucket: "easydwelling-2dc5d.appspot.com",
  messagingSenderId: "543234344493",
  appId: "1:543234344493:web:78036e29eefaff856c1aa4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);