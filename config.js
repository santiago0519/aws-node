const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAlzwNThf9sWza-dMxZ4JzF6r_O6i9G5v4",
  authDomain: "formulario-4db16.firebaseapp.com",
  projectId: "formulario-4db16",
  storageBucket: "formulario-4db16.appspot.com",
  messagingSenderId: "761444653393",
  appId: "1:761444653393:web:2bcc2084b06e41c3bd9b70",
  measurementId: "G-ZHCH4FBZ7X"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
