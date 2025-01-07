const allP = document.body.getElementsByTagName("p");
console.log(allP);

const pTableau = Array.from(allP);

pTableau.map((paragraphe) => {
    paragraphe.innerText = "LOL JE SUIS HACKERMAN";
    paragraphe.addEventListener("click", () => {
        console.log("tu t'es fait hack");
    });
});




    