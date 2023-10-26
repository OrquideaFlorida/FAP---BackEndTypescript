

class Animal {
    nome: String;
    porte: String;
    patas: Number;

    constructor(nome: String, porte: String, patas: Number){
        this.nome = nome;
        this.porte = porte;
        this.patas = patas;
    }
    animalFaz(){
console.log(`O ${this.nome} faz `);

    }
}
//let aAnimal = new Animal("Cachorro", "Médio", 4);
//console.log(`Meu animal é um ${aAnimal.nome} de porte ${aAnimal.porte} de possui ${aAnimal.patas} patas.`);


