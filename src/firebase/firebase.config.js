// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fOlJxl8EJEaI-3QTAwT7LVHOVPTqWkw",
  authDomain: "popx-task.firebaseapp.com",
  projectId: "popx-task",
  storageBucket: "popx-task.firebasestorage.app",
  messagingSenderId: "676765997131",
  appId: "1:676765997131:web:676e52a1e4f59379a755ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;