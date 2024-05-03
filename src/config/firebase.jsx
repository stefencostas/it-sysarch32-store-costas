// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlPAkg8YP3cM-9zVwKUJMajQoHJ0acTAE",
    authDomain: "it-sysarch32-store-costas1.firebaseapp.com",
    projectId: "it-sysarch32-store-costas1",
    storageBucket: "it-sysarch32-store-costas1.appspot.com",
    messagingSenderId: "119283759675",
    appId: "1:119283759675:web:9a103475973d8ec5367a1e",
    measurementId: "G-93KMV80XHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);