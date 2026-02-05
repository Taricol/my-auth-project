
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCkGYPEuA_IFeNvYaJNGLdt25cvKU1TjWI",
  authDomain: "my-auth-project-35e1c.firebaseapp.com",
  projectId: "my-auth-project-35e1c",
  storageBucket: "my-auth-project-35e1c.firebasestorage.app",
  messagingSenderId: "27225165863",
  appId: "1:27225165863:web:d87582a201f896f2d77e02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)