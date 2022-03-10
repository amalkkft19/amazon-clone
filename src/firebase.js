import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_FfHu9I9EIyaLxv_UB8KiE26yQSS2msE",
  authDomain: "clone-42165.firebaseapp.com",
  projectId: "clone-42165",
  storageBucket: "clone-42165.appspot.com",
  messagingSenderId: "233595892310",
  appId: "1:233595892310:web:c84ed5d09ced2fcbef81f7",
  measurementId: "G-X8MG37KF7P",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
