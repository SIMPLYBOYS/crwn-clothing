import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAdkCLpoSfsfzM6TSYWk9uz0lniysIiF8c",
    authDomain: "crwn-db-1f711.firebaseapp.com",
    databaseURL: "https://crwn-db-1f711.firebaseio.com",
    projectId: "crwn-db-1f711",
    storageBucket: "crwn-db-1f711.appspot.com",
    messagingSenderId: "139617042346",
    appId: "1:139617042346:web:3a23173a2884393b4435d3",
    measurementId: "G-NYPZEDDM4Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;