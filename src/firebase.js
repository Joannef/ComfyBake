import firebase from 'firebase';
import 'firebase/firestore';

//This is my firebase authentication
//you can change it to your firebase authentication
var firebaseApp = {
    apiKey: "AIzaSyCBDaRuSre3hjHZR136J_zp6RMwHOkFeUs",
  authDomain: "comfybake-78d36.firebaseapp.com",
  projectId: "comfybake-78d36",
  storageBucket: "comfybake-78d36.appspot.com",
  messagingSenderId: "947011318778",
  appId: "1:947011318778:web:0692a26d4c971c54042a43",
  measurementId: "G-9BFRZ3Z5KL"
};

const database = firebase.initializeApp(firebaseApp);
var db = firebase.database();

export default database;
