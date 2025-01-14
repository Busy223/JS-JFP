class CompteBancaire {
    constructor(paramNameUser, paramSoldeUser) {
        this.nameUser = paramNameUser;
        this.soldeUser = paramSoldeUser;

        //this.credit=this.credit;

    }
    // Ajoute un montant au solde
    crediter(montant) {
        this.soldeUser += montant;
    }
    // Retirer un montant au solde
    retirer(montant) {
        this.soldeUser -= montant;
    }
    virer(paramNameUser , montant ) {
        if(this.soldeUser>montant){
            return this.soldeUser -= montant , paramNameUser += montant;
        } 
    }
    // Renvoie la description du compte
    decrire() {
        const description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde ;
        return description;
    }
}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].crediter(1000);
}
console.log(lesComptes);
// un retrait de 100 par Alex
lesComptes["Alex"].retirer(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].retirer(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) {
    console.log(lesComptes[key].decrire());
}
console.log(lesComptes);