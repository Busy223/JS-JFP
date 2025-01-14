

// const patternMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
// const mail = document.body.querySelector("#mail");

// const resultmail = patternMail.test(mail);

// mail.addEventListener("keyup", function() {
    
//     if(patternMail.test(mail.value) == true){
//         mail.style.backgroundColor = "green";
//     } else {
//         mail.style.backgroundColor = "red";
//     }
    
// });

// const errorMessageDiv = document.querySelector("#passwordErrMsg");
// const password = document.body.querySelector("#password");
// const regpass = /^[A-Za-z\d]{6,8}$/;
// const charDecimal = /\d/;
// const charSpecial = /[$&@!]/;


// password.addEventListener("keyup", function() {
//     let message = ""; 

   
//     if (regpass.test(password.value)) {
//         message = "Le mot de passe doit être entre 6 et 8 caractères, et ne contenir que des lettres et des chiffres.";
//     }
   
//     else if (charDecimal.test(password.value)) {
//         message = "Le mot de passe doit contenir au moins 1 chiffre.";
//     }
    
//     else if (charSpecial.test(password.value)) {
//         message = "Le mot de passe doit contenir au moins 1 caractère spécial (@, &, !, $,).";
//     }
    
// });

//!correction

const loginInput = document.querySelector('#exampleInputEmail1');
const passwordInput = document.querySelector('#exampleInputPassword1');
const userMessage = document.querySelector('#userMessage');

loginInput.addEventListener('keyup',()=>{ 
 // Ajoute un écouteur d'événements pour détecter les frappes de touches sur le champ de saisie de l'email
 const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
 // Définit une expression régulière pour valider le format de l'email
 if(regexMail.test(loginInput.value)){ 
   loginInput.style.backgroundColor = 'lightgreen'; 
   // Change la couleur de fond en rouge si l'email est invalide
 }
 else{  // Vérifie si la valeur saisie ne correspond pas à l'expression régulière
   loginInput.style.backgroundColor = 'red'; // Change la couleur de fond en vert
 }
})

passwordInput.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';
    // Si MDP <6 alors dans errormessage on cumule une <li></li> (trop court)
    // Sinon Si MDP >8 alors dans errormessage on cumule une <li></li> (trop long)
    // Si la value du passWord ne match pas la regex decimale alors on cumule une <li></li> (faut un chiffre)
    // etc ... meme système pour les autres cas 
    // On peut aussi faire un truc genre si erroMessage est vide alors c'est tout bon 
    if(passwordInput.value.length<6){
      errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }
    else if(passwordInput.value.length>8){
      errorMessage+='<li>Le Mot de passe trop LONG</li>'
    }
  
    if(!passwordInput.value.match(charDecimal)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!passwordInput.value.match(charSpecial)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
      userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
      userMessage.style.border ='5px solid red'
    }
    else{
      userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
      userMessage.style.border ='5px solid green'
    }
});

