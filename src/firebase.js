// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH50reudG6ZP4waRHY4belEnCPCDKaVZw",
  authDomain: "fypproj-56b9f.firebaseapp.com",
  projectId: "fypproj-56b9f",
  storageBucket: "fypproj-56b9f.appspot.com",
  messagingSenderId: "860019649096",
  appId: "1:860019649096:web:ab862e9856aa16e151867d",
  measurementId: "G-1SHPZQMECT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };