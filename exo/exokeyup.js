// * Mini test pour capter event du Clavier
// document.addEventListener('keyup', function(eventClavier){
//     console.log('Yes Moi ECRIRE');
//     console.log(eventClavier);
//     console.log(eventClavier.key);
// });

// const texte  = document.querySelector("textarea");
// const divecr = document.querySelector("div");

//     texte.addEventListener('keyup', ()=>{
//         divecr.innerHTML = DOMPurify.sanitize(marked(texte.value));//innerHtml car on utilise marked qui sert a utiliser le langage markdown
//     });

// const input = document.querySelector("input");
// const log = document.getElementById("log");

// input.addEventListener("keydown", logKey);

// function logKey(e) {
//   log.textContent = ` ${e.target.value}`;
// }

//!correction
//!------------KEYUP Editeur de texte--------------
// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt
const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("#renderTextEdit");

// monTxt.addEventListener("keyup", (keyEvent) => {
  // On peut passer par l'event du clavier
  // console.log('keyEvent : ',keyEvent);
  // console.log('dedans keyEvent.target.value : ',keyEvent.target.value);
  // Mais ici on travaille avec des input qui ont un attribut value
//   rendu.innerHTML = marked(monTxt.value);
  // Version traduite en marked
  // rendu.innerHTML = marked(monTxt.value); //Utilisation de marked pour convertir le markdown en html
  // rendu.innerHTML =DOMPurify.sanitize(marked(keyEvent.target.value)); //!Idem mais on passe par l'event du clavier pour récupérer la valeur
  // rendu.innerText = monTxt.value;// ici on passe par l'attribut value de l'input
  // rendu.innerText = keyEvent.target.value; //ici on passe par l'event du clavier
  //Dans le innerHtml on lui assigne la Value de ce que
  //L'utilisateur tape dans le input / textarea
  // rendu.innerHTML = monTxt.value;
// });

//!local storage

// const texte = document.querySelector("textarea");
// const divecr = document.querySelector("div");
// texte.value= localStorage.getItem("monSuperTexte"); //remplir le texte avec le local storage
// divecr.innerText = localStorage.getItem("monSuperTexte");// remplie la div avec le local storage
// texte.addEventListener('keyup', ()=>{
//      localStorage.setItem("monSuperTexte", texte.value);
//  });





//!autre méthode pas top 
// texte.value = localStorage.getItem("monSuperTexte");
// texte.oninput = () => {
//     localStorage.setItem("monSuperTexte", texte.value);
// };

//! correction
const zoneTxt = document.querySelector("textarea");
const zoneRender = document.querySelector("#formRender");
// Dès qu'on arrive sur la page,
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
zoneTxt.value = localStorage.getItem('monSuperTexte');
//Si zoneTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if(zoneTxt.value){
//    zoneRender.innerText = localStorage.getItem('monSuperTexte');
   zoneRender.innerHTML = marked(localStorage.getItem('monSuperTexte'));
};
//On détecte ce que tape l'utilisateur dans le textarea
zoneTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',zoneTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
//    zoneRender.innerHTML =marked(zoneTxt.value);
   zoneRender.innerHTML =DOMPurify.sanitize(marked(zoneTxt.value));
//    zoneRender.innerHTML =marked(zoneTxt.value);
});


