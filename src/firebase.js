// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBSKsd9IkGIbOaGYPQmRVTt7lYDY5wwZvc",
  authDomain: "trevious-b14f3.firebaseapp.com",
  projectId: "trevious-b14f3",
  storageBucket: "trevious-b14f3.appspot.com",
  messagingSenderId: "689389223563",
  appId: "1:689389223563:web:4e7eb6d1dfd3b45efc1e8e",
  measurementId: "G-VED9JGE550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};
