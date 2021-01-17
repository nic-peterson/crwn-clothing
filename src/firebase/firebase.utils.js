import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDts9Q5rIB8ug3SlXkBzg0DuVC9_joxVgc",
  authDomain: "crwn-db-5cd99.firebaseapp.com",
  projectId: "crwn-db-5cd99",
  storageBucket: "crwn-db-5cd99.appspot.com",
  messagingSenderId: "779288952565",
  appId: "1:779288952565:web:805209306227b759c44fbc",
  measurementId: "G-LMC7K2QHMG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
