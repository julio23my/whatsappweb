import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAGmM3NBO9xQWd-HQVQ6QP50NoW7HrmE80",
  authDomain: "whatsapp-clone-eb5cf.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-eb5cf.firebaseio.com",
  projectId: "whatsapp-clone-eb5cf",
  storageBucket: "whatsapp-clone-eb5cf.appspot.com",
  messagingSenderId: "314890818469",
  appId: "1:314890818469:web:f06c3aa4531af0868b8e4c",
  measurementId: "G-RZ6BVDHSED"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
