//import Animal from './Animal.ts';

class Ave extends Animal {
    asas: boolean;

    constructor(nome: String, porte: String, patas: Number, asas: boolean) {
        super(nome, porte, patas);
        this.asas = asas;
    }
    voar(){}
}
let aAve = new Ave("Gavião", "Pequeno", 2, true);

//Exporta a classe Ave
//export default Ave;
