import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAsPscwchg451xbosURwRcs-XGj_2vae78",
    authDomain: "cli-surveys.firebaseapp.com",
    databaseURL: "https://cli-surveys.firebaseio.com",
    projectId: "cli-surveys",
    storageBucket: "cli-surveys.appspot.com",
    messagingSenderId: "965969198132",
    appId: "1:965969198132:web:6767f0e37e1835d15f9e61",
    measurementId: "G-Y9TLXWWLSZ"
};

// Initialize Firebase
const firebaseRef = firebase.initializeApp(firebaseConfig);

export default firebaseRef;