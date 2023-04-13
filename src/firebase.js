import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh3HahmEHo7WwOyrt03PJ6rTyMo9srBvA",
  authDomain: "tinder-clone-a9ef7.firebaseapp.com",
  projectId: "tinder-clone-a9ef7",
  storageBucket: "tinder-clone-a9ef7.appspot.com",
  messagingSenderId: "911298608528",
  appId: "1:911298608528:web:06f319d1e7c2381f0dc715",
  measurementId: "G-N1REKM2803",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
