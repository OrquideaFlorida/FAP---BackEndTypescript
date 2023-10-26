//import Animal from './Animal.ts';

class Ave extends Animal {
    asas: boolean;
    corDasPenas: String;

    constructor(nome: String, porte: String, patas: Number, asas: boolean, corDasPenas: String) {
        super(nome, porte, patas);
        this.asas = asas;
        this.corDasPenas = corDasPenas;
    }
    voar(){
        console.log(`O ${this.nome} voou!`);
    }
}
let aAve = new Ave("Gavião", "Pequeno", 2, true, "cinza");

aAve.voar();

//Exporta a classe Ave
//export default Ave;
