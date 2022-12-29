import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBrjMPQ-MpF5_A1wn6xF38z9o3LHcz8JWs",
  authDomain: "vue-blog-system-67fd8.firebaseapp.com",
  projectId: "vue-blog-system-67fd8",
  storageBucket: "vue-blog-system-67fd8.appspot.com",
  messagingSenderId: "413958864552",
  appId: "1:413958864552:web:7759fae1d18e10ae27cc9d"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth}