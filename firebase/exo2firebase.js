// require('dotenv').config(); // Charger les variables d'environnement

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };
  
  
    firebase.initializeApp(firebaseConfig);
    //On va créer une référence à notre BDD
    const dbRef = firebase.database().ref();
    // On va également faire une ref directement dans le noeud / """"table""""" users
    const usersRef = dbRef.child("users");
    
    const addUserBtnUI = document.getElementById("add-user-btn");
    addUserBtnUI.addEventListener("click", addUserBtnClicked);
    
    const formUserUI = document.getElementById("add-user-form");
    formUserUI.addEventListener("submit", (event) => event.preventDefault());
    
    const formUserEditUI = document.getElementById("edit-user-module");
    formUserEditUI.addEventListener("submit", (event) => event.preventDefault());
    
    const userListUI = document.getElementById("user-list");
    const userDetailUI = document.getElementById("user-detail");
    
    //* La fonction princpale au final
    readUserData();
    
    //!-------------FIREBASE-------------------
    //* CREATE (AJOUTER)
    //TODO 1: Récupérer le bouton avec l'id add-user-btn°
    //TODO 2: sur ce bouton placer un addEventlistener au click et qui lance la fonction addBtnClicked
    //TODO 3: Créer la fonction addUserBtnClicked
    //TODO 5: Dans la ƒ° addUserBtnClicked, Récupérer TOUS LES INPUTS avec laclasse user-input dans 1 variable addUserInputsUI (getElementsByClassName)
    //TODO 6: Dans la ƒ° addUserBtnClicked, créer une variable newUser (qui est un objet vide)
    //TODO 7: Dans la ƒ° addUserBtnClicked, faire une boucle for pour parcourir les input dans addUserInputsUI
    //TODO 8: Dans la Boucle, Pour chaque éléments parcourus on récupère Dans 1 variable key = addUserInputsUI[i].getAttribute('data-key');
    //TODO 9: Dans la boucle, 1 variable value = addUserInputsUI[I].value
    //TODO 10: Dans la boucle, Pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur :  newUser[key] = value
    //TODO 11: après le parcours des inputs, sur usersRef on va faire un push de newUser
    //TODO 12: Dans la ƒ° addUserBtnClicked, on console log un msg type nouvel utilisateur enregistré
    //TODO 13: Dans la ƒ° addUserBtnClicked, On console log le nom et l'âge du nouvel utilisateur
    //TODO 14: Dans la ƒ° addUserBtnClicked, On ré initialise le formulaire avec l'id add-user-form
    
    function addUserBtnClicked() {
      //* Ensuite on Récupère les 3 inputs (pour renseigner un nom, un age, un mail)
      const addUserInputsUI = document.getElementsByClassName("user-input");
      console.log(addUserInputsUI);
      //* On crée un objet (vide pour le moment) va stocker les infos du nouvel utilisateur
      let newUser = {};
      //* On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
      for (let i = 0; i < addUserInputsUI.length; i++) {
        //* Ci dessous on récupère les key et value (on a des attributs data-key déjà placé en html)
        let key = addUserInputsUI[i].getAttribute("data-key");
        //* Pour chaque input on récupère la value.
        let value = addUserInputsUI[i].value;
        //* Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
        newUser[key] = value;
      }
      //* Enfin on ajoute notre nouvel utilisateur dans la BDD avec .push()
      usersRef.push(newUser);
      console.log("New User SAVED");
      console.log(`${newUser.name} il a ${newUser.age} ans`);
      //* Pour + de confort on reset le formulaire une fois qu'on a ajouté un user
      formUserUI.reset();
    };
    
    //* LIRE TOUT LES USERS
    //TODO : Dans la ƒ° readUserData
    //TODO : sur la variable usersRef on va utiliser une fonction .on()
    //? Pour info .on() va s'utiliser comme un addEventListener
    //TODO : 1er param de .on(), une string "value" (en gros dans la bdd on surveille si ya des changements de value)
    //TODO : 2e param de .on(), une ƒ° fléchée qui prend un paramètre snap
    //?  usersRef.on("value", (snap) => {});
    //TODO : Dans la fonction fléchée : on va assigner une string vide au innerHTML de userListUI
    //TODO : Sur la variable snap on va utiliser un forEach pour parcourir le tableau avec une variable temporaire childSnap
    //TODO : Dans le forEach : dans une variable key on va stocker childSnap.key
    //TODO : Dans le forEach : dans une variable value on va stocker childSnap.val()
    //TODO : Dans le forEach : dans une variable $li on va créer un element <li></li>
    //TODO : Dans le forEach : dans le innerHTML de $li on lui assigne value.name
    //TODO : Dans le forEach : Sur la $li on lui rajoute un attribut 'user-key', on lui assignera la valeur stockée dans key
    //TODO : Dans le forEach : dans la userListUI on va placer $li
    function readUserData() {
      usersRef.on("value", (snap) => {
        console.log(snap);
        
        userListUI.innerHTML = "";
        snap.forEach((childSnap) => {
          //* Key va stocker les ID
          let key = childSnap.key;
          let value = childSnap.val();
          let $li = document.createElement("li");
          //*Phase 4 on fait les icones pour UPDATE
          let editIconUI=document.createElement('button');
          editIconUI.innerText = 'Update'
          editIconUI.setAttribute('class','btn btn-outline-primary mx-3');
          //*Phase 5 on fait les icones pour UPDATE
          let deleteIconUI=document.createElement('button');
          deleteIconUI.innerText = 'Delete'
          deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
           //* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
          //* on veut savoir qui on supprime au click
          deleteIconUI.setAttribute("userid", key);
          deleteIconUI.addEventListener("click", deleteButtonClicked);
          //* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
          editIconUI.setAttribute("userid", key);
          editIconUI.addEventListener("click", editButtonClicked);
          $li.innerText = value.name;
          $li.append(editIconUI);
          $li.append(deleteIconUI);
          $li.setAttribute("user-key", key);
          $li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
          //* À la lecture de chaque utilisateur on le rend clickable pour afficher les détails
          $li.addEventListener("click", userClicked);
          userListUI.append($li);
        });
      });
    }
    
    
    
    //* LIRE 1 USER
    //TODO: Dans readUserData avant le append(), on va placer un addEventListener sur $li qui écoute « click » et lance la fonction userClicked
    //? Ensuite dans la fonction userClicked on  capte l'évènement (on s'en sert pour savoir qui on selectionne)
    //TODO: Dans la ƒ° userClicked, Dans 1 variable userID, on va récupérer userID via event.target.getAttribute("user-key");
    //TODO: Dans la ƒ° userClicked, 1 variable userRef va faire référence à 1 utilisateur en particulier, on lui assigne dbRef,
    //? on utilise la fonction child() pour viser le noeud "users/"" concaténé avec userID
    //TODO: Dans la ƒ° userClicked, 1 variable userDetailUI récupère ma div avec  user-detail
    //TODO: Dans la ƒ° userClicked, Ensuite sur userRef on utilise la fonction on("value", snap =>{ })
    //TODO: Dans la ƒ° userClicked, Dans la fonction => , on va vider l'innerHTML de userDetailUI
    //TODO: Dans la ƒ° userClicked, Ensuite sur snap on va utiliser un forEach pour parcourir le cliché (snap) de notre BDD.
    //TODO: Dans la ƒ° userClicked dans le forEach, 1 variable $p créée un élément <p>
    //TODO: Dans la ƒ° userClicked dans le forEach, On rempli le innerHTML de $p avec childSnap.key et childSnap.val()
    //TODO: Dans la ƒ° userClicked dans le forEach, On rajoute $p dans notre userDetailUI
    function userClicked(event) {
      //* on récupère l'id des USERS via l'attribut user-key que l'on a placé
      //* durant la lecture de la BDD (cf. la fonciton readUserData(vers la fin, le setAttribute)).
      let userID = event.target.getAttribute("user-key");
      console.log(userID);
      //* Maintenant qu'on à l'id de l'utilisateur sur lequel on a click
      //* on peut viser 1 utilisateur précisément dans la BDD
      const oneUserRef = dbRef.child("users/" + userID);
      oneUserRef.on("value", (snap) => {
        console.log(snap);
        //* Par précautions on vide le innerHTML de la div qui affiche les details
        userDetailUI.innerHTML = "";
        //* On parcourt avec un foreach les données d'un user
        snap.forEach((childSnap) => {
          console.log(childSnap);
          //* pour chaque données on crée un <p></p> (pour l'age, le mail, le name)
          let $p = document.createElement("p");
          $p.setAttribute("class", "card-text");
          $p.innerText = childSnap.key + " - " + childSnap.val();
          userDetailUI.append($p);
        });
      });
    };
    
    
    
    //*UPDATE (EDITER)
    //! Dans la ƒ° editButtonClicked
    //TODO: on va modifier le display d formUserEditUI à block 
    //TODO: on va modifier le display du forUserUI à none 
    //TODO:  Ensuite on va faire ceci : 
    //TODO: Une variable inputId qui récupère (querySelector) l'element avec la classe .edit-userid
    //TODO: A la value de inputId on assigne event.target.getAttribute("userid");
    //TODO:  Créer une variable userRef on lui assigne dbRef.child('users/' + inputId.value);
    //TODO:  Dans une variable editUserInputsUI, on récupère tous les éléments de classe edit-user-input (querySelectorAll ou autre)
    //TODO:  On va parcourir notre BDD avec userRef.on("value", snap => {
    //TODO: dans la ƒ° fléchée, Faire une boucle for qui parcourt les inputs editUserInputsUI,
    //TODO: dans la ƒ° fléchée dans la boucle, dans une variable key, on stock editUserInputsUI[i].getAttribute("data-key");
    //TODO: dans la ƒ° fléchée dans la boucle, Ensuite à chaque valeur de nos editUserInputsUI[i] on assigne snap.val()[key];
    //TODO:  En dehors de la fonction on(), Dans une variable saveBtn, on récupère notre bouton avec l id édit-user-btn 
    //TODO:  En dehors de la fonction on(), Sur ce bouton on place un eventListener au click qui lance saveUserBtnClicked
      function editButtonClicked(event) {
        formUserEditUI.style.display='block';
        formUserUI.style.display='none';
        // On récupère l'id de l'input hidden
        let inputId =document.querySelector(".edit-userid");
        inputId.value = event.target.getAttribute("userid");
        //* on vise le bon user dans la BDD via son ID 
        const userRef = dbRef.child('users/' + inputId.value);
        //* On selectionne les input du formulaire d'édition pour les pré-remplir
        const editUserInputsUI = document.querySelectorAll(".edit-user-input");
        userRef.on("value", snap => {
          //*Avec une boucle On pré rempli le formulaire pour editer (en récupérant les key et valeurs)
          for(let i = 0, len = editUserInputsUI.length; i < len; i++) {
              let key = editUserInputsUI[i].getAttribute("data-key");
                      editUserInputsUI[i].value = snap.val()[key];
          }
        });
        //* On place un addEventListener sur le bouton 'save' du formulaire 
        //* Cela appellera la fonction saveUserBtnClicked qui elle se chargera d'enregistrer en BDD
        //* l'utilisateur que l'on vient d'éditer 
        const saveBtn = document.querySelector("#edit-user-btn");
        saveBtn.addEventListener("click", saveUserBtnClicked);  
      };
    
    //*SAVE
    //TODO : Dans la ƒ° saveUserBtnClicked : 
    //TODO : Dans une variable userID on récupère la VALUE de l'input avec l'id "edit-userid"
    //TODO : Dans une variable userRef on fait une référence à l'utilisateur dans la BDD 
    //TODO : Une variable editedUserObject qui est un objet vide
    //TODO : Dans une variable editUserInputsUI on récupère TOUS les elements html qui ont la classe "edit-user-input" (querySelectorAll)
    //TODO : Ensuite on va faire une boucle forEach pour parcourir les editUserInputsUI
    //TODO : Dans les param de forEach(), on lui passe une fonction qui a une variable textField en paramètre
    //TODO : Dans cette fonction, dans le forEach on aura une variable key qui va stocker les attributs data-key de textField (getAttribute())
    //TODO : Pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur :  editedUserObject[key] = textField.value 
    //TODO : Ensuite en dehors de la boucle, sur notre variable userRef on utilise la ƒ° update en lui passant editedUserObject en paramètre
    //TODO : Enfin on peut remettre le display  à "none" de formUserEditUI et à "block" pour formUserUI
    // --------------------------
    // EDIT - SAVE
    //? La fonction qui enregistre en BDD les modifs que l'on a fait sur un user
    // --------------------------
    function saveUserBtnClicked() {
        //* On récupère l'id de l'utilisateur
        const userID = document.querySelector(".edit-userid").value;
        //* avec cet id on fait une référence à cet utilisateur dans la BDD
        const userToUpdateRef = dbRef.child('users/' + userID);
        //* on crée un objet vide pour le moment
        let editedUserObject = {};
        //* on selectionne tous les input du formulaire d'édition
        const editUserInputsUI = document.querySelectorAll(".edit-user-input");
        //* On fait une boucle sur ces inputs pour remplir notre objet
        editUserInputsUI.forEach(function(textField) {
            let key = textField.getAttribute("data-key");
            //* On rempli l'objet
              editedUserObject[key] = textField.value;
        });
        //* Une fois l'objet rempli on l'update dans la BDD
        userToUpdateRef.update(editedUserObject);
        console.log("USER UPDATED");
        //* pour le confort on fait disparaitre le formulaire d'édition et re apparaitre celui d'ajout
      formUserEditUI.style.display='none';
      formUserUI.style.display='block';
    };
    
    
    
    //* SUPPRIMER
    //TODO 1: Dans la ƒ° readUserData, dans le forEach, juste avant $li.innerHtml = …
    //TODO 2: Dans la ƒ° readUserData, dans le forEach, On va déclarer une variable deleteIconUI dans laquelle on va créer un élément span
    //TODO 3: Dans la ƒ° readUserData, dans le forEach, On va ensuite modifier la class de deleteIconUI en « delete-user »
    //TODO 4: Dans la ƒ° readUserData, dans le forEach, On va remplir le innerHTML de deleteIconUI avec un « X » 
    //TODO 5: Dans la ƒ° readUserData, dans le forEach, deleteIconUI on lui rajoute un attribut « userid » qui prendra la valeur de key( via setAttribute)
    //TODO 6: Dans la ƒ° readUserData, dans le forEach, Enfin sur deleteIconUI on place un addEventListener qui écoute le click et lance la fonction deleteButtonClicked
    //TODO 7: Créer une fonction deleteButtonClicked qui prend event en paramètre 
    //TODO 8: Dans la ƒ° deleteButtonClicked, récupérer le userID via event.target.getAttribute 
    //TODO 9: Dans la ƒ° deleteButtonClicked,
    //TODO9-2: Faire une référence userRef à notre BDD directement sur le noeud de l'utilisateur qu'on a cliqué (référence à la table users + userID)
    //TODO 10: Dans la ƒ° deleteButtonClicked,utiliser la fonction remove sur userRef
    function deleteButtonClicked(event) {
      console.log(event);
      // event.stopPropagation();
      //* On récupère l'ID de l'utilisateur que l'on veut supprimer via un getAttribute
      //* (cf. la fonciton readUserData(vers la fin, le setAttribute)).
      let userID = event.target.getAttribute("userid");
      //* Dans la BDD on vise 1 user en particulier
      const userToDeleteRef = dbRef.child('users/' + userID);
      //* Bonus une autre manière de récup le <p></p> qui contient le nom user
      //* Enfin sur cet utilisateur on utilise la fonction .remove()
      userToDeleteRef.remove();
    };