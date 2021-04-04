import firebase from 'firebase';
import 'firebase/firestore';

//This is my firebase authentication
//you can change it to your firebase authentication
var firebaseApp = {
    apiKey: "AIzaSyCUU8fZTwRDsheZKGUwNDKlbMChILuW6Uc",
    authDomain: "comfybake-d5d50.firebaseapp.com",
    projectId: "comfybake-d5d50",
    storageBucket: "comfybake-d5d50.appspot.com",
    messagingSenderId: "800786672334",
    appId: "1:800786672334:web:4924a9ea440cc72bae7e9f"
};

const database = firebase.initializeApp(firebaseApp);
var db = firebase.database();

export default database;