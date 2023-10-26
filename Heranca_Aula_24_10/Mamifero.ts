class Mamifero extends Animal {
    corDoPelo: String;
    tamPelo: String;

    constructor(nome: String, porte: String, patas: Number, corDoPelo: String, tamPelo: String){
        super(nome, porte, patas);
        this.corDoPelo = corDoPelo;
        this.tamPelo = tamPelo;
    }
    
}

// export class Cachorro extends Mamifero{
//     animalFaz(): void{
//         console.log("Au, Au!");
//     }
// }
// export class Gato extends Mamifero{
//     animalFaz(): void{
//         console.log("Miau!")
//     }
// }


// function main(){
//     const cachorro = new Cachorro();
//     const gato = new Gato();

//     cachorro.animalFaz();
//     gato.animalFaz();
// }
// main();