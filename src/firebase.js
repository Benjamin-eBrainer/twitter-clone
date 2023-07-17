import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJp2KXbXYEKRsKjO9xpeZMzK49ZHKiWRM",
    authDomain: "twitter-clone-42bf7.firebaseapp.com",
    projectId: "twitter-clone-42bf7",
    storageBucket: "twitter-clone-42bf7.appspot.com",
    messagingSenderId: "317037225692",
    appId: "1:317037225692:web:756ce71c9c48dd6a9cf619",
    measurementId: "G-Q09JX75V9H"
};

initializeApp(firebaseConfig)
const db = getFirestore()

export default db;