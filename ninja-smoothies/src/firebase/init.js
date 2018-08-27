import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBgibqzuDAheuC-ImGSJy8eeGSDTHStHQ",
    authDomain: "udemy-ninja-smoothies-e1ebb.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-e1ebb.firebaseio.com",
    projectId: "udemy-ninja-smoothies-e1ebb",
    storageBucket: "udemy-ninja-smoothies-e1ebb.appspot.com",
    messagingSenderId: "1026857224294"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true }) // prevents error message

  // export firestore database (so that we can import it in another file)
  export default firebaseApp.firestore()