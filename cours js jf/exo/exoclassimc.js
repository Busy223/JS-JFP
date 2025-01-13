class Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
        this.nameUser = nom;
        this.poidsUser = poids;
        this.tailleUser = taille;


    // TODO 
    }
    //* Le calcul poid diviser par taille **2 **2=au carré
    calculImc() {
        // TODO
        return (this.imc = this.poidsUser / this.tailleUser ** 2).toFixed(2);

    }
    
    getProfileInfo() {
        console.log('Bonjour ',this);
        return `son nom : ${this.nameUser}
                (son poids : ${this.poidsUser}
                sa taille : ${this.tailleUser})
                a un IMC de : ${this.imc})`;
        }
    //* Affichage
    display() {
        // TODO
        console.log(this.getProfileInfo());
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55)
];



const exempleUser = new Imc (list[0],);



function calculeImcSurTab(array) {
    array.forEach((user) => {
        user.calculImc();
        user.display();
    });
}


console.log(calculeImcSurTab(list));
