const N = 12 ;
const XXX = 1.9;
const R = 300000;
const FA = 50000;
const FF = 20000;
class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
    this._name = nom;
    this._prenom = prenom;
    this._age = age;
    this._salaire = salaireMensuel;
    }
    // me servira à passer le cout d 1 employé dans la classe PME
    getCout() {
        
        return this.calculCout();
    }
    //calcul cout total d 1 salarié
    calculCout() {

        const coutTotal = (this._salaire * N) * XXX;
        return coutTotal;
    }
}
    



class Pme {
    constructor(nom, equipe, ventes, coutsFixes, achats) {
        this._name = nom;
        this._equipe = equipe;
        this._ventes = ventes;
        this._coutsFixes = coutsFixes;
        this._achats = achats;
    }

    bilanCalculed() {
        
        let coutTotalEquipe = 0;
        for (const employe of this._equipe) {
            coutTotalEquipe += employe.getCout();
        }
            const bilan = this._ventes - (coutTotalEquipe + this._coutsFixes + this._achats);

        return `Ma petite Entreprise : Cout Initial ${this._coutsFixes + this._achats}
         Ma petite Entreprise:  Cout Total Equipe ${coutTotalEquipe}
         Ma petite Entreprise : Ventes ${R}
         Ma petite Entreprise : Bilan ${bilan}`;
        
      //TODO
    }
}




const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

pme.bilanCalculed();
console.log(pme.bilanCalculed());


//! correction 
class Pme {
    // 
    constructor(nom, equipe, ventes, coutsFixes, achats) {
        this._nom = nom;
        this._equipe = equipe;
        this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
        this._ventes = ventes;
        this._bilan = 0;    // attribut en OutMode a calculer
    }

    bilanCalculed() {
        console.log(this._equipe);
        let cumulEquipe = 0;
        console.log(`${this._nom} : Cout Initial : ${this._cout}`);

        //Boucle qui parcourt le tableau des salariés, Employee (equipe)
        //Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
        for (let unSalarie of this._equipe) {
            cumulEquipe += unSalarie.getCout();
        }

        console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
        //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
        this._cout += cumulEquipe;
        console.log(`${this._nom} : VENTES : ${this._ventes}`);
        //Dans les _cout on va avoir les frais fixe + frais achat et 
        //on vient de rajouter en + le cout total d'une equipe
        //donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
        this._bilan = this._ventes - this._cout;
        console.log(`${this._nom} : BILAN : ${this._bilan}`);
    }
}

