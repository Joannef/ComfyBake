import firebase from 'firebase';
import 'firebase/firestore';

//This is my firebase authentication
//you can change it to your firebase authentication
var firebaseApp = {
    apiKey: "AIzaSyBFRJz_ymHYt5YnG5fDXEygwDLtudzsaVM",
    authDomain: "comfybake-492d2.firebaseapp.com",
    databaseURL: "https://comfybake-492d2-default-rtdb.firebaseio.com",
    projectId: "comfybake-492d2",
    storageBucket: "comfybake-492d2.appspot.com",
    messagingSenderId: "578802392976",
    appId: "1:578802392976:web:3d2eb9e14699f285e01d15",
};

const database = firebase.initializeApp(firebaseApp);
var db = firebase.database();

export default database;
