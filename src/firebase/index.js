import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTNdo96QHx2_xc-kHI0PcFeD3xpPkA2jA",
    authDomain: "disclosureinc-f7e57.firebaseapp.com",
    projectId: "disclosureinc-f7e57",
    storageBucket: "disclosureinc-f7e57.appspot.com",
    messagingSenderId: "1018855862635",
    appId: "1:1018855862635:web:56c09d93ce2737a3f4dc2e",
    measurementId: "G-PJSDPE44WD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


  export default db;