import MilieuNaturel from "./MilieuNaturel";

export default interface Aquatique extends MilieuNaturel {
    /**
     * Indique si l'animal sait respirer sous l'eau
     */
    respirerSousEau()

    /**
     * Indique si l'animal sait nager
     */
    nager()
}
