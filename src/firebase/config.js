import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSq0LCVQLrQNm1enH-cbTxT8iB1hEhM",
  authDomain: "react-16327.firebaseapp.com",
  projectId: "react-16327",
  storageBucket: "react-16327.appspot.com",
  messagingSenderId: "139653694317",
  appId: "1:139653694317:web:3b1c2c579aa8713d4d88d4",
  measurementId: "G-39B8JSU80T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);