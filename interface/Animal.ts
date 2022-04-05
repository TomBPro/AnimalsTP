export default interface Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    /**
     * Affiche les informations de l'animal
     */
    display()
}
