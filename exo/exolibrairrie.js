//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
let something = 44;
function functionBugParent() {
    let something = 9;
    let lesNews = "";
    console.log(something);
    console.log(lesNews);


    function functionBugEnfant() {
        let lesNews = "il est 99h67";
        console.log(lesNews);
    }
    functionBugEnfant();
};
functionBugParent();
console.log(something);