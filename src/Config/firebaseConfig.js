
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAKTbYmDVJIi0SNAUqsGxRKWPsfB3Saj0w",
  authDomain: "research-nexus-511a9.firebaseapp.com",
  projectId: "research-nexus-511a9",
  storageBucket: "research-nexus-511a9.appspot.com",
  messagingSenderId: "497800236187",
  appId: "1:497800236187:web:20453e60ff44a206620a3e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider(app);