import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "secourism-dashboard.firebaseapp.com",
	projectId: "secourism-dashboard",
	storageBucket: "secourism-dashboard.appspot.com",
	messagingSenderId: "731599543518",
	appId: "1:731599543518:web:c6f8b14ea1caf6087c364f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
