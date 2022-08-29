import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCLVXQ8xcoUNn1I0JrbY0ZeotO1940hypU",
    authDomain: "tradingproyect-af47d.firebaseapp.com",
    projectId: "tradingproyect-af47d",
    storageBucket: "tradingproyect-af47d.appspot.com",
    messagingSenderId: "843241045094",
    appId: "1:843241045094:web:5fb2c2ed8e4a3f55ef41a7"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);