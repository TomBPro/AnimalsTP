import MilieuNaturel from "./MilieuNaturel";

export default interface Terrestre extends MilieuNaturel{
    /**
     * Indique si l'animal sait respirer hors de l'eau
     */
    respirerHorsDeLeau()

    /**
     * Indique si l'animal sait marcher
     */
    marcher()
}
