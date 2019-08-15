import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDUnOl6O5le8SRLxTmYxZCBBDaGGJRAFRw",
    authDomain: "vuetify-todo-f25dd.firebaseapp.com",
    databaseURL: "https://vuetify-todo-f25dd.firebaseio.com",
    projectId: "vuetify-todo-f25dd",
    storageBucket: "vuetify-todo-f25dd.appspot.com",
    messagingSenderId: "346866191627",
    appId: "1:346866191627:web:e8611e855c0cf92a"
  };

  firebase.initializeApp(config);

  const database = firebase.firestore();

  export default database;