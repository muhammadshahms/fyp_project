// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6iaXiZz4SOndexbpUIzj0-udEd65IFV0",
  authDomain: "virtualtalk-9255f.firebaseapp.com",
  projectId: "virtualtalk-9255f",
  storageBucket: "virtualtalk-9255f.appspot.com",
  messagingSenderId: "293928309627",
  appId: "1:293928309627:web:54f1524b2dfcd0a4d8a3de",
  measurementId: "G-P1KDG9CZ45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app ,auth};
