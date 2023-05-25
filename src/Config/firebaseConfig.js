import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAKTbYmDVJIi0SNAUqsGxRKWPsfB3Saj0w",
//   authDomain: "research-nexus-511a9.firebaseapp.com",
//   projectId: "research-nexus-511a9",
//   storageBucket: "research-nexus-511a9.appspot.com",
//   messagingSenderId: "497800236187",
//   appId: "1:497800236187:web:20453e60ff44a206620a3e",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBVugmrzpf-d1dsDnEAzs-7xGFXXX1DCUg",
  authDomain: "research-nexus-22f5f.firebaseapp.com",
  projectId: "research-nexus-22f5f",
  storageBucket: "research-nexus-22f5f.appspot.com",
  messagingSenderId: "349359801409",
  appId: "1:349359801409:web:5f1fb95592db7421e0b2c0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);