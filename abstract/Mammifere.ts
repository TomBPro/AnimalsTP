import Animal from "../interface/Animal";

export default abstract class Mammifere implements Animal {
    private _dateNaissance: Date;
    private _nom: string;
    private _poids: number;


    constructor(nom: string, poids: number, dateNaissance: Date) {
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }

    /**
     * Affiche les informations du mammifères
     */
    display() {}


    get dateNaissance(): Date {
        return this._dateNaissance;
    }

    set dateNaissance(value: Date) {
        this._dateNaissance = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get poids(): number {
        return this._poids;
    }

    set poids(value: number) {
        this._poids = value;
    }
}
