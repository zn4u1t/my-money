import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA1fN4535lzORRcoSjE3QzQFBHmez_p74U",
    authDomain: "my-money-ca10b.firebaseapp.com",
    projectId: "my-money-ca10b",
    storageBucket: "my-money-ca10b.appspot.com",
    messagingSenderId: "1026809178508",
    appId: "1:1026809178508:web:b6731474188d1837278ea9"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }