import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJw38oQ5vyoVkOG70jQtzPkTtpzsBCH6M",
  authDomain: "todoapp-reactnative-d12c8.firebaseapp.com",
  projectId: "todoapp-reactnative-d12c8",
  storageBucket: "todoapp-reactnative-d12c8.appspot.com",
  messagingSenderId: "528587791402",
  appId: "1:528587791402:web:0e21f17f047620515e3753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
