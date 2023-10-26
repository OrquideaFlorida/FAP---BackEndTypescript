class Mamifero extends Animal {
    corDoPelo: String;
    tamPelo: String;

    constructor(nome: String, porte: String, patas: Number, corDoPelo: String, tamPelo: String){
        super(nome, porte, patas);
        this.corDoPelo = corDoPelo;
        this.tamPelo = tamPelo;
    }
    
}