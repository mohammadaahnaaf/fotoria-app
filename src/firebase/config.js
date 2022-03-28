import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  // apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
  // authDomain: "the-net-ninja-sandbox.firebaseapp.com",
  // databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
  // projectId: "the-net-ninja-sandbox",
  // storageBucket: "the-net-ninja-sandbox.appspot.com",
  // messagingSenderId: "485942827092",
  // appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"

  apiKey: "AIzaSyDvb42blVkQAZ8H2Z_YEmpDeWE01oO69qE",
  authDomain: "fotoria-app.firebaseapp.com",
  projectId: "fotoria-app",
  storageBucket: "fotoria-app.appspot.com",
  messagingSenderId: "61441932346",
  appId: "1:61441932346:web:42faf30e1e4e3ec9954903"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };