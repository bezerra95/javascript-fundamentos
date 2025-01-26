// classe-basica.js

// === CLASSE BÁSICA ===
// Introdução ao conceito de classes em JavaScript.

console.log('=== CLASSE BÁSICA ===');

// Declarando uma classe
class Pessoa {
    // Atributo da classe
    nome;

    // Método da classe
    dizerOla() {
        console.log('Olá, mundo!');
    }
}

// Criando uma instância da classe
const pessoa1 = new Pessoa();

// Acessando o método
pessoa1.dizerOla(); // Saída: Olá, mundo!
