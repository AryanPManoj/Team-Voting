import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDyrk4MGtqvNxsPMXqUys2Kzd9JtvJNB54",
    authDomain: "voting-app-b71d6.firebaseapp.com",
    databaseURL: "https://voting-app-b71d6-default-rtdb.firebaseio.com",
    projectId: "voting-app-b71d6",
    storageBucket: "voting-app-b71d6.appspot.com",
    messagingSenderId: "251923592131",
    appId: "1:251923592131:web:d78a8c4457f8f704454376",
    measurementId: "G-L0RVX74CK9"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();