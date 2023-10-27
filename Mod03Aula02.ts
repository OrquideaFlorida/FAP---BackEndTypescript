// Aula 05/10
// Casses Typescript

import { NumberLiteralType } from "typescript";

//EXEMPLO:
class Carro {
    // Atributos
    marca: string;
    modelo: string;
    ano: number;
    
    // Método construtor
    constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    
    // Método
    acelerar() {
    console.log("Acelerando o carro...");
    }
}
//Aqui, meuCarro é um objeto da classe Carro.
const meuCarro = new Carro("Toyota", "Corolla", 2022);

//Aqui está um exemplo de como você pode usar a classe Carro:
//const meuCarro = new Carro("Toyota", "Corolla", 2022);
console.log(`Meu carro é um ${meuCarro.marca} ${meuCarro.modelo} fabricado em ${meuCarro.ano}.`);

meuCarro.acelerar(); // Chamando o método acelerar

//-- Exercício 1 --
//CRIE UMA CLASSE PESSOA, COM OS ATRIBUTOS NOME, IDADE E E-MAIL
class Pessoa {
    nome: string;
    idade: number;
    e_mail: string;

    constructor(nome: string, idade: number, e_mail: string){
        this.nome = nome;
        this.idade = idade;
        this.e_mail = e_mail;
    }
}
const aPessoa = new Pessoa("Orquídea", 30, "orquidea@yahoo.com.br");
console.log(`Meu nome é ${aPessoa.nome}, tenho ${aPessoa.idade}, anos e meu e-mail é ${aPessoa.e_mail}`);

//-- Exercício 2--
//CRIAR UMA CLASSE ALUNO QUE HERDA DA CLASSE PESSOA E TENHA UM ATRIBUTO ADICIONAL: MATRÍCULA
class Aluno extends Pessoa{
    matricula: number;

    constructor(nome: string, idade: number, e_mail: string, matricula: number){
       super(nome, idade, e_mail);
       this.matricula = matricula;
    }
    
}
let aAluno = new Aluno("Orquídea", 30, "orquidea@yahoo.com.br", 123.4);
console.log(`Meu nome é ${aPessoa.nome}, tenho ${aPessoa.idade}, anos e meu e-mail é ${aPessoa.e_mail} e Matrícula: ${aAluno.matricula}`);

//-- Exercício 3 --
//CRIE UMA CLASSE RETÂNGULO COM OS ATRIBUTOS ALTURA E LARGURA E MÉTODOS PARA
//CALCULAR A ÁREA E OPERÍMETRO:
class Retangulo {
    altura: number;
    largura: number;

    constructor(altura: number, largura: number){
        this.altura = altura;
        this.largura = largura;
    }
    area(){
        console.log("Sua Área é: " + this.altura * this.largura);
    }
    perimetro(){
        console.log("Seu Perímetro é: " + (2 * this.altura + 2 * this.largura));
    }
}
       
const oRetangulo = new Retangulo(10, 30);
console.log(`Retângulo com base: ${oRetangulo.largura} e Algura: ${oRetangulo.altura}`);

oRetangulo.area();
oRetangulo.perimetro();


//-- Exercício 4 --
//CRIE UMA CLASSE CÍRCULO COM O ATRIBUTO RAIO E MÉTODOS PARA CALCULAR A ÁREA E
//A CIRCUNFERÊNCIA:
class Circulo {
    raio: number;

    constructor(raio: number){
        this.raio = raio;
    }
    areaCirc(){
        console.log("A área do círculo é: " + (3.1416 * this.raio^2));
    }
    circunferencia(){
        console.log("A sua circunferência mede: " + (2 * 3.1416 * this.raio));
    }
}
const oCirculo = new Circulo(10);
console.log(`O círculo possui raio de: ${oCirculo.raio}`);

oCirculo.areaCirc();
oCirculo.circunferencia();

//-- Exercício 5 --
//CRIE UMA CLASSE CONTA BANCÁRIA, COM OS ATRIBUTOS SALDO E numeroConta E MÉTODOS
// PARA DEPOSITAR, SACAR E VERIFICAR O SALDO
// class ContaBancaria{
//     saldo: number;
//     numeroConta: string;

//     constructor(saldo: number, numeroConta: string){
//         this.saldo = saldo;
//         this.numeroConta = numeroConta;
//     }
//     deposito(){
//         let grana = 0
//         if(!validarGrana(grana)){
//             console.log("Valor inválido: Digite um valor numérico maior do que zero");
//             return;
//         }
//         this.saldo += grana;
//         console.log(`Depósito de ${grana.toFixed(2)} realizado com sucesso!`);
//     }
//     saque(){
//         let grana = 0;
//         if (!validarGrana(grana)){
//             console.log('Valor inválido: Digite um valor numérico maior do que zero.');
//             return;
//         }
//         if (grana <= this.saldo){
//             this.saldo -= grana;
//             console.log(`Saque de ${grana.toFixed(2)} realizado com sucesso!`);
//         } else {
//             console.log("Você não possui saldo suficiente.");
//         }
//     }
//     verificarSaldo(){
//         console.log(`Seu saldo é: R$ ${this.saldo} reais`);
//     }
// }

// function validarGrana(grana){ //VERIFICAR SE O VALOR É POSITIVO
//     return !isNaN(grana) && grana >0;
// }

// const aContaBancaria = new ContaBancaria(500, '123-4');
// console.log(`Sua conta de N° ${aContaBancaria.numeroConta} possui:`);

// -- Exercício 6 --
//CRIE UMA CLASSE PRODUTO COM OS ATRIBUTOS NOME, PREÇO E QUANTIDADE E MÉTODOS
//PARA CALCULAR O VALOR TOTAL (PREÇO * QUANTIDADE)
class Produto{
    nome: string;
    preço: number;
    quantidade: number;

    constructor(nome: string, preço: number, quantidade: number){
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }
    valorTotal(){
        console.log(`O valor total dos(as) ${this.nome} são R$ ${this.preço * this.quantidade}`);
    }
}
const oProduto = new Produto("Maçãs", 10, 1.50);

oProduto.valorTotal();

// -- Exercício 7 --
//CRIE UMA CLASSE TRIÂNGULO COM OS ATRIBUTOS LADO1, LADO2, LADO3 E UM MÉTODO
//PARA SABER SE O TRIÂNCULO É VÁLIDO
class Triangulo{
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    triValido(){
        if(Math.max(this.lado1, this.lado2, this.lado3) < this.lado2 + this.lado3){
            console.log("É um triângulo Válido!");
        } else {
            console.log("[INVÁLIDO] não pode ser um triângulo!");
        }
    }
    triTipo(){
        if(this.lado1 === this.lado2 && this.lado1 === this.lado3){
            console.log("É um Equilátero!");
        } else if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3 ) {
            console.log("É um Escaleno!");
        } else {
            console.log("É um Isóiceles!");
        }
    }
}
const oTriangulo = new Triangulo(10, 10, 10);

oTriangulo.triValido();
oTriangulo.triTipo();

//PARA UM TRIÂNGULO SER VERDADEIRO, SEGUE A SEGUINTE REGRA:
//O LADO MAIOR DEVE SER MENOR QUE A SOMA DOS OUTROS DOIS LADOS

//MaiorLado < LadoB + LadoC


// -- Exercício 8 --
//CRIE UMA CLASSE LIVRO COM ATRIBUTOS TITULO, AUTOR E anoPublicacao E UM MÉTODO PARA
//EXIBIR INFORMAÇÕES DO LIVRO
class Livro{
    titulo: String;
    autor: String;
    anoPublicacao: number;

    constructor (titulo: String, autor: String, anoPublicacao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    infoLivro(){
        console.log("--INFORMAÇÕES LITERÁRIAS--");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
    }
}
const oLivro = new Livro("O Senhor dos Anéis", "JRR Tolkien", 1954);

oLivro.infoLivro();

// -- Exercício 9 --
//CRIE UMA CLASSE AGENDA, QUE PERMITA ADICIONAR, LISTAR E REMOVER CONTATOS (NOME E NÚMEROS
// DE TELEFONE)


// -- Exercício 10 --
//CRIE UMA CLASSE carroEsportivo QUE HERDA DA CLASSE CARRO (USADA NO EXEMPLO ANTERIOR) E TENHA
//MÉTODOS ADICIONAIS PARA ACELERAR RAPIDAMENTE E PRODUZIR UM SOM ESPORTIVO
class carroEsportivo extends Carro{
    cor: string;

    constructor(marca: string, modelo: string, ano: number, cor: string){
        super(marca, modelo, ano);
        this.cor = cor;
    }
    Acelerar(){
        console.log("Vrum, Vrum, Vruuuuuuummmmm...");
    }
}
const carroEsportivos = new carroEsportivo("Porsche", "Cabriolet", 2023, "Verde");

carroEsportivos.Acelerar();
