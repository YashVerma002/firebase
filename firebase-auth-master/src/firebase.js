import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfZ1GQCq52Zv",
  authDomain: "authmast2r.firebaseapp.com",
  projectId: "authmast2r",
  storageBucket: "authmast2r.appspot.com",
  messagingSenderId: "498706344982",
  appId: "1:498706344982:web:24a9cfd404f1e9d6589937",
  measurementId: "G-8LMJ62RPKD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
