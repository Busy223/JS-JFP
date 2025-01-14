// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdyEFlFh4XRXS6lZ0pxnMzyiTISbiFlLE",
    authDomain: "bugsbusy-e46c4.firebaseapp.com",
    databaseURL: "https://bugsbusy-e46c4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bugsbusy-e46c4",
    storageBucket: "bugsbusy-e46c4.firebasestorage.app",
    messagingSenderId: "199865224805",
    appId: "1:199865224805:web:c0ae2a7d18a2affbc2808c",
    measurementId: "G-HT1KJ3E9GM"
  };

/**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");