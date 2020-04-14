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

export const createUserprofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
