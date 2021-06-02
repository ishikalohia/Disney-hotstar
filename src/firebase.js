import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUsAo-su6G-objCmg9BNL1UHMxNuRphGY",
    authDomain: "disney-plus-clone-f8eea.firebaseapp.com",
    projectId: "disney-plus-clone-f8eea",
    storageBucket: "disney-plus-clone-f8eea.appspot.com",
    messagingSenderId: "167069988087",
    appId: "1:167069988087:web:a403d62ba962ee616e8ff2",
    measurementId: "G-C29271BG3C"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;

