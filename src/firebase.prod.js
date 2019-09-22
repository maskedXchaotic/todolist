import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBUOt3ojFuS8jofl-ec8tuGTqsQ3O1_i-8",
  authDomain: "todolist-97e2c.firebaseapp.com",
  databaseURL: "https://todolist-97e2c.firebaseio.com",
  projectId: "todolist-97e2c",
  storageBucket: "todolist-97e2c.appspot.com",
  messagingSenderId: "1046696212820",
  appId: "1:1046696212820:web:3aedd16c7fcff20a08b0c1"
});

export { firebaseConfig as firebase };
