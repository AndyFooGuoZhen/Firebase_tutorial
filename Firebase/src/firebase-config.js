import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGbz5VhQYOaN4ndGfkiQR05gAKGvhtAzY",
  authDomain: "fir-tutorial-8162c.firebaseapp.com",
  projectId: "fir-tutorial-8162c",
  storageBucket: "fir-tutorial-8162c.appspot.com",
  messagingSenderId: "727638004915",
  appId: "1:727638004915:web:7ae95120c91de1f38c8cc6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
