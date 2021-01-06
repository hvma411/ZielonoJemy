import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfCLPWMavM0ecWfsvqAI2JMf_694vGqyg",
    authDomain: "zielonojemy.firebaseapp.com",
    databaseURL: "https://zielonojemy.firebaseio.com",
    projectId: "zielonojemy",
    storageBucket: "zielonojemy.appspot.com",
    messagingSenderId: "628158372674",
    appId: "1:628158372674:web:49c9d4970136241a5e46db",
    measurementId: "G-S1ERNH5PLY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  export default firebase;