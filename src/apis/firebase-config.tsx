import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCifFVzwxeindt6FWoQgoipZmjQ2F1JYBo",
  authDomain: "dy-wedding-database.firebaseapp.com",
  projectId: "dy-wedding-database",
  storageBucket: "dy-wedding-database.firebasestorage.app",
  messagingSenderId: "735826439895",
  appId: "1:735826439895:web:8ace93c9d1636824e54a92",
  measurementId: "G-CQSQX67HNT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
