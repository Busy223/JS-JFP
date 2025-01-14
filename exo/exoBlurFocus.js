// const area = document.querySelector("textarea");

// area.addEventListener("focus", () => {
//     area.style.backgroundColor = "blue";
// });

// area.addEventListener("blur", () => {
//     area.style.backgroundColor = "transparent"
// });

//! correction 
// TODO 1: récupérer l'input dans une variable leInput
// TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus" 
// TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
// TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
// TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent
const formTitleInput = document.querySelector('#titleInput');
console.log(formTitleInput);
// TEST avec FOCUS
formTitleInput.addEventListener("focus", function() {
    formTitleInput.style.backgroundColor = "royalBlue";
    formTitleInput.style.color = "white";
});
// TEST avec Blur
formTitleInput.addEventListener("blur", () => {
    formTitleInput.style.backgroundColor = "transparent";
    formTitleInput.style.color = "black";
});