import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { EmailAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAox2p9MxJVLcsah_DJKvSRaP6xkPePjVE",
  authDomain: "invoice-7a560.firebaseapp.com",
  projectId: "invoice-7a560",
  storageBucket: "invoice-7a560.appspot.com",
  messagingSenderId: "621242704821",
  appId: "1:621242704821:web:113a4d82a08f9eb7e5effc",
  measurementId: "G-1241PZ0E6P"
};



const app = initializeApp(firebaseConfig);
const provider = new EmailAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export {provider, auth, storage}
export default db;