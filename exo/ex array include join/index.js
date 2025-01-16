// const leTexte = document.querySelector("textarea");
// const buton = document.querySelector("button")


// leTexte.addEventListener("keypress", function(){


//     if (leTexte.value.length >= 4) {

//         buton.disabled = true;

//     }
// });

const monForm = document.querySelector("form");
//ecouteur d'evenement pour le bouton du form
monForm.addEventListener("submit", function(event){
    //permet a revenir au comportement de base car il charge une page sinon on bloque le fait qu'il envoit 
    event.preventDefault();
    console.log("ok");
    monForm.reset();
})