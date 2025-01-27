// Definindo uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; // Propriedade
        this.idade = idade; // Propriedade
    }

    saudacao() { // Método
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando um objeto a partir da classe
const pessoa1 = new Pessoa("Julio", 25);
console.log(pessoa1.saudacao()); // Exibe: Olá, meu nome é Julio e tenho 25 anos.
