import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDTV4aC0kDGMcV-kmLrGtxJ2Q1g5NijNn8",
    authDomain: "project-60-e7a31.firebaseapp.com",
    databaseURL: "https://project-60-e7a31-default-rtdb.firebaseio.com",
    projectId: "project-60-e7a31",
    storageBucket: "project-60-e7a31.appspot.com",
    messagingSenderId: "50298371341",
    appId: "1:50298371341:web:909d4a12debe88f4954444"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();