// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcj9_eQLRi9BrkLm9Gp_Qr0ACZs89U58",
  authDomain: "netflixgpt-61787.firebaseapp.com",
  projectId: "netflixgpt-61787",
  storageBucket: "netflixgpt-61787.appspot.com",
  messagingSenderId: "834235038348",
  appId: "1:834235038348:web:5414fb0aa0a617b58999a9",
  measurementId: "G-8PCY6BX8V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

getAnalytics(app);

export const auth = getAuth();
