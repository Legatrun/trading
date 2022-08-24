import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDnV9VYVK3-JJ5onapL_KQgD4YnywP12KA",
    authDomain: "tradingproyect-20c08.firebaseapp.com",
    projectId: "tradingproyect-20c08",
    storageBucket: "tradingproyect-20c08.appspot.com",
    messagingSenderId: "171723941677",
    appId: "1:171723941677:web:1d2641acfac8410e5195a4"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)