const t = document.querySelector("h1");



// t.addEventListener("click", ()=>{
//     t.innerText = "--🙈--"
// }
// );

t.addEventListener("click", ()=>{
    if (t.innerText === "D.O.M Events") {
    t.innerText = "--🙈--"
} else {
    t.innerText = "D.O.M Events"
}});



// //?code aide steeven
// t.addEventListener('click',function(){
//    t.innerHTML = t.innerHTML=='D.O.M Events'? '--🙈--':'D.O.M Events';
// })

//! correction
//1ere soluce
// let leH1 = document.querySelector('#mainTitle');

// leH1.addEventListener('click',()=>{
//     console.log('ok ca click');
//     leH1.innerText ='-- 🥳 --'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
// });

//2eme soluce Version avec le reclick + boolean

// let leH1 = document.querySelector('#mainTitle');

// let selectTitle = false;    //! Un booléen pour savoir si le titre a été cliqué ou non

// leH1.addEventListener('click',()=>{
//     console.log('ok ca click');
//     leH1.innerText = selectTitle==true  ? '-- 🥳 --':'D.O.M Events'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
//     selectTitle = !selectTitle; // ? à chaque click le booléen passe à son inverse (pour faire le re click)
// });