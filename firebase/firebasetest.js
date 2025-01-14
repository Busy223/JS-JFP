// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdyEFlFh4XRXS6lZ0pxnMzyiTISbiFlLE",
    authDomain: "bugsbusy-e46c4.firebaseapp.com",
    databaseURL: "https://bugsbusy-e46c4-default-rtdb.europe-west1.firebasedatabase.app/",
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
const dbRef = firebase.database().ref();// crée des référence chez firebase dbRef est la ref principale de la base de donée 

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");

/**
 * Référence au bouton d'ajout de tâche dans l'interface utilisateur.
 * @type {HTMLElement}
 */
const addBtnUI = document.querySelector('#addTaskButton');

/**
 * Référence à la liste des tâches dans l'interface utilisateur.
 * @type {HTMLElement}
 */
const tasksListUI = document.querySelector('#taskList');

/**
 * Ajoute un écouteur d'événements au bouton d'ajout de tâche.
 * @event click
 * @param {Function} addTask - Fonction appelée lors du clic sur le bouton.
 */
addBtnUI.addEventListener('click', addTask);

/**
 * Ajoute une nouvelle tâche à la base de données.
 * @function addTask
 * @description Cette fonction récupère la valeur de l'input de tâche, 
 * crée un nouvel objet tâche avec cette valeur, 
 * l'ajoute à la base de données Firebase, 
 * vide l'input et met à jour l'affichage des tâches.
 */
function addTask() {
  const taskInputUI = document.querySelector('#taskInput');
  let newTask = {};
  newTask.title = taskInputUI.value;
  allTasksRef.push(newTask);
  taskInputUI.value = "";
}