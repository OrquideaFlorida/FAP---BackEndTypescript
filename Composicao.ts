// Aula 27/10
//Contrato da classe
export interface Telhas{
    tamanho: number;
}
export interface Tijolos{
    quantos: number;
}
export interface RevestPiso{
    cor: string;
}


export class Casa{
    telhas: Telhas;
    tijolos: Tijolos;
    revestPiso: RevestPiso;

    constructor(telhas: Telhas, tijolos: Tijolos, revestPiso: RevestPiso){
        this.telhas = telhas;
        this.tijolos = tijolos;
        this.revestPiso = revestPiso;
    }
}

//Criar uma classe que instancie um objeto
export class Brasilit implements Telhas{
    tamanho: number;

    constructor(tamanho: number){
        this.tamanho = tamanho;
    }
}

export class Alvenaria implements Tijolos{
    quantos: number;

    constructor(numero: number){
        this.quantos = numero; 
    }
}
export class Ceramica implements RevestPiso{
    cor: string;

    constructor(cor: string){
        this.cor = cor;
    }
}

const teto = new Brasilit(200);
const parede = new Alvenaria(2000);
const piso = new Ceramica("Verde");

const casa = new Casa(teto, parede, piso);

console.log("Para construir minha casa, preciso de: ");
console.log(casa.telhas);
console.log(casa.tijolos);
console.log(casa.revestPiso);




// export class Telhas {
//     constructor(public tipo: string) {}
//   }
  
//   export class Casa {
//     private telha: Telhas[];
  
//     constructor() {
//       this.telha = [new telha("a"), new telha("b"), new telha("c"), new telha("c")];
//     }
  
//     construirCasa() {
//       for (const telha of this.telha) {
//         console.log(`Com a telha ${telha.tipo} eu posso construir a minha casa.`);
//       }
//     }
//   }
  
//   function main() {
//     const casinha = new telha();
//     casinha.construirCasa();
//   }
  
//   main();