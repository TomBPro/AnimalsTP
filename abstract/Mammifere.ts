import Animal from "../interface/Animal";

export default abstract class Mammifere implements Animal {
    _dateNaissance: Date;
    _nom: string;
    _poids: number;


    constructor(nom: string, poids: number, dateNaissance: Date) {
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }

    /**
     * Affiche les informations du mammifères
     */
    display() {}
}
