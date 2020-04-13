import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBsoG2tGLOF4TVbiVKPTrwqRMcoK0SQj74",
    authDomain: "crwn-db-aa1c5.firebaseapp.com",
    databaseURL: "https://crwn-db-aa1c5.firebaseio.com",
    projectId: "crwn-db-aa1c5",
    storageBucket: "crwn-db-aa1c5.appspot.com",
    messagingSenderId: "1060623570414",
    appId: "1:1060623570414:web:f7f172d3a7c8ffa6afaaff",
    measurementId: "G-LM2V5M958T"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

