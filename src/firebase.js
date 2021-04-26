import firebase from 'firebase';
import 'firebase/firestore';

//This is my firebase authentication
//you can change it to your firebase authentication
var firebaseApp = {
    apiKey: "AIzaSyCMcSkWeH_W_m6qlhkys56XWon6Ftm7bQM",
    authDomain: "teak-passage-234323.firebaseapp.com",
    databaseURL: "https://teak-passage-234323-default-rtdb.firebaseio.com",
    projectId: "teak-passage-234323",
    storageBucket: "teak-passage-234323.appspot.com",
    messagingSenderId: "884080763321",
    appId: "1:884080763321:web:cbf06ae9dda251e901d668",
    measurementId: "G-JEV2S809PV"
};

const database = firebase.initializeApp(firebaseApp);

export default database;
