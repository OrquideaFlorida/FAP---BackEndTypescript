// -- Aula 26/10
//Exemplo
// export interface Pessoa{
//     nome: string;
//     sobrenome: string;
//     idade: number;
// }
// function main(){
//     function exibirNome(pessoa: Pessoa){
//         return `
//         nome...: ${pessoa.nome}
//         sobrenome...: ${pessoa.sobrenome}
//         idade...: ${pessoa.idade}
//         `
//     }
// }
// main();

// export interface livro{
//     titulojJ: string;
//     autor: sytring
//     paginas?: number; //Propriedade opcional

//     function main(){
//         const livro = {
//             titulo: "Clean Code",
//             autor: "Robert C."
//         };
//     }
// }

//EXEMPLO 2
// export interface IAnimal {
//     nome: string;
//     idade: number;
//     estaVivo: boolean;

//     comer(tipoComida: String): void;
// }

// export class Gato implements IAnimal {
//     constructor(
//         public nome: string,
//         public idade: number,
//         public estaVivo: boolean
//     ){}
// comer(tipoComida: string): void {
//     console.log(`O gato ${this.nome} está comendo ${tipoComida}.`);
//     }
// }

// function main(){
//     const gato = new Gato ("Totó", 10, true);

//     console.log(gato);
//     gato.comer("Ração");
// }
// main();

export interface IEletronicos {
    marca: string;
    modelo: string;
    estaFuncionando: boolean;

    ligar(barulho: String): void;
}

export class Celular implements IEletronicos {
    constructor(
        public marca: string,
        public modelo: string,
        public estaFuncionando: boolean
    ){}
ligar(barulho: string): void {
    console.log(`O meu ${this.marca}, ${this.modelo} está ${barulho}.`);
    }
}

function main(){
    const celular = new Celular ("Motorolla", "Abc100", true);

    console.log(celular);
    celular.ligar("trim, trim...");
}
main();



