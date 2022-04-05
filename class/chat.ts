import Mammifere from "../abstract/Mammifere";
import Terrestre from "../interface/Terrestre";

export default class Chat extends Mammifere implements Terrestre {

    constructor(nom: string, poids: number, dateNaissance: Date) {
        super(nom, poids, dateNaissance);}

    miauler() {
        console.log(this._nom + ' sait miauler');
    }

    display(): any {
        console.log(`L'animal terrestre a pour nom ${this._nom}, pesant ${this._poids} kg et étant née le ${this._dateNaissance.toLocaleDateString()}`);
    }

    marcher() {
        console.log(this._nom + ' sait marcher');
    }

    respirerHorsDeLeau() {
        console.log(this._nom + ' sait respirer hors de l\'eau');
    }
}
