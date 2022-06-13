// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYzuh5zioFwYbr92UIVgK5tZ9o9Qsr36M",
  authDomain: "site-matheusmf.firebaseapp.com",
  projectId: "site-matheusmf",
  storageBucket: "site-matheusmf.appspot.com",
  messagingSenderId: "431994379488",
  appId: "1:431994379488:web:e285c5c92f9765b7018485",
  measurementId: "G-GE2VSE7HEM"
};

export const firebaseImpl = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseImpl);
// export const firebaseDatabase = database();

