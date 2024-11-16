// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtKb6zcAipvwJjsGxh-N7GgvvXwmEzGrA",
  authDomain: "auth-moha-milon-b8282.firebaseapp.com",
  projectId: "auth-moha-milon-b8282",
  storageBucket: "auth-moha-milon-b8282.firebasestorage.app",
  messagingSenderId: "722828029930",
  appId: "1:722828029930:web:dca6e245b1594a81c0cc93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);