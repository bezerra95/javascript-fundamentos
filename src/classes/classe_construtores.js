// classe-construtores.js

// === CLASSES COM CONSTRUTORES ===
// Como inicializar uma classe com valores.

console.log('=== CLASSES COM CONSTRUTORES ===');

// Classe com um construtor
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para exibir informações
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Criando instâncias da classe com diferentes valores
const pessoa1 = new Pessoa('Ana', 25);
const pessoa2 = new Pessoa('Carlos', 30);

// Chamando o método
pessoa1.apresentar(); // Saída: Olá, meu nome é Ana e eu tenho 25 anos.
pessoa2.apresentar(); // Saída: Olá, meu nome é Carlos e eu tenho 30 anos.
