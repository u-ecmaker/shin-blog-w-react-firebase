import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYI_gyVotUpYCRPw-MsMm6gD1XareW30M",
  authDomain: "shin-discord-clone.firebaseapp.com",
  projectId: "shin-discord-clone",
  storageBucket: "shin-discord-clone.firebasestorage.app",
  messagingSenderId: "692098121468",
  appId: "1:692098121468:web:01b5d944a9d1527e616179"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
