import Mammifere from "../abstract/Mammifere";
import Aquatique from "../interface/Aquatique";

export default class Dauphin extends Mammifere implements Aquatique {

    constructor(nom: string, poids: number, dateNaissance: Date) {
        super(nom, poids, dateNaissance);}

    display(): any {
        console.log(`L'animal aquatique a pour nom ${this._nom}, pesant ${this._poids} kg et étant née le ${this._dateNaissance.toLocaleDateString()}`);
    }

    retenirRespiration() {
        console.log(this._nom + ' peut retenir sa respiration');
    }

    respirerSousEau() {
        console.log(this._nom + ' sait respirer sous l\'eau');
    }

    cliquetter() {
        console.log(this._nom + ' peut cliquetter');
    }

    nager() {
        console.log(this._nom + ' sait nager');
    }
}
