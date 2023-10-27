// Aula 27/10
//Contrato da classe
export interface Telhas{
    tamanho: number;
}
export interface Tijolos{
    quantos: number;
}


export class Casa{
    telhas: Telhas;
    tijolos: Tijolos;

    constructor(telhas: Telhas, tijolos: Tijolos){
        this.telhas = telhas;
        this.tijolos = tijolos;
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

const teto = new Brasilit(200);
const parede = new Alvenaria(2000);

const casa = new Casa(teto, parede)

console.log("Para construir minha casa, preciso de: ");
console.log(casa.telhas);
console.log(casa.tijolos);




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