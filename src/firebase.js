import firebase from 'firebase';
import 'firebase/firestore';

//This is my firebase authentication
//you can change it to your firebase authentication
var firebaseApp = {
    apiKey: "AIzaSyCUU8fZTwRDsheZKGUwNDKlbMChILuW6Uc",
    authDomain: "comfybake-d5d50.firebaseapp.com",
    databaseURL: "https://comfybake-d5d50-default-rtdb.firebaseio.com",
    projectId: "comfybake-d5d50",
    storageBucket: "comfybake-d5d50.appspot.com",
    messagingSenderId: "800786672334",
    appId: "1:800786672334:web:b801c84acda8ed04ae7e9f",
    measurementId: "G-RSYPKYWVRE"
};

const database = firebase.initializeApp(firebaseApp);

export default database;
