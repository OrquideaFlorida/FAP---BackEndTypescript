class Pessoa {
	nome: string;
	idade: number;
	estaVivo: boolean;
	
	constructor(nome: string, idade: number, estaVivo: boolean){
		this.nome = nome;
		this.idade = idade;
		this.estaVivo = estaVivo;
	}

	nascer(): void{
		console.log(`${this.nome} nasceu!`)
	}

	crescer(): void{
		this.idade++;
		console.log(`${this.nome} fez ${this.idade} ano(s)!`)
	}

	morrer(): void{
        this.idade = 0;
		console.log(`${this.nome} morreu!`)
	}
}

let pessoa = new Pessoa('Paulo', 0, true);
pessoa.nascer();
pessoa.crescer();
pessoa.morrer();