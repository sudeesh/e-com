import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDFn_DtCSNazsT8XfCPl0FUOXiCSY4lGeQ",
  authDomain: "crwn-db-e473a.firebaseapp.com",
  databaseURL: "https://crwn-db-e473a.firebaseio.com",
  projectId: "crwn-db-e473a",
  storageBucket: "crwn-db-e473a.appspot.com",
  messagingSenderId: "147225212998",
  appId: "1:147225212998:web:027077871dbf6e6b87b247",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
