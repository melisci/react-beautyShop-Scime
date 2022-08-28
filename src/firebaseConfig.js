// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeBT48Osbc-8Jv-aRP6pNFexyB258TRN0",
  authDomain: "beautyshop-110a2.firebaseapp.com",
  projectId: "beautyshop-110a2",
  storageBucket: "beautyshop-110a2.appspot.com",
  messagingSenderId: "283779384443",
  appId: "1:283779384443:web:decd458dbe96452be34ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app);
export default db;