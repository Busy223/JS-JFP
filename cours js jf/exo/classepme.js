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