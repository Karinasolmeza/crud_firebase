// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSFWtshP2T04PkTg_Ezk2G6P5ynG7aIWM",
  authDomain: "dbfirebasereact.firebaseapp.com",
  projectId: "dbfirebasereact",
  storageBucket: "dbfirebasereact.appspot.com",
  messagingSenderId: "294892305954",
  appId: "1:294892305954:web:371f0756b7d7f77e51d47b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)