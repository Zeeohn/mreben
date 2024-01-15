import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3B-Sl9kxME0n8_lU3U_L0pe8njCIk82U",
  authDomain: "mreben-f2cbf.firebaseapp.com",
  projectId: "mreben-f2cbf",
  storageBucket: "mreben-f2cbf.appspot.com",
  messagingSenderId: "772153380542",
  appId: "1:772153380542:web:13e2fec9c28539cb9758ef",
  measurementId: "G-N4NRC8T80X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
