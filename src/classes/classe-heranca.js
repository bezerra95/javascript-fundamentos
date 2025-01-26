// classe-heranca.js

// === HERANÇA ===
// Criando classes que herdam de outras classes.

console.log('=== HERANÇA ===');

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(`${this.nome} está fazendo um som.`);
    }
}

// Classe que herda de Animal
class Cachorro extends Animal {
    fazerSom() {
        console.log(`${this.nome} está latindo!`);
    }
}

// Classe que herda de Animal
class Gato extends Animal {
    fazerSom() {
        console.log(`${this.nome} está miando!`);
    }
}

// Criando instâncias
const cachorro = new Cachorro('Rex');
const gato = new Gato('Mingau');

// Chamando os métodos
cachorro.fazerSom(); // Saída: Rex está latindo!
gato.fazerSom(); // Saída: Mingau está miando!
