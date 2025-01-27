// Classe base
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    som() {
        return `${this.nome} está fazendo um som!`;
    }
}

// Classe filha (herança)
class Cachorro extends Animal {
    som() {
        return `${this.nome} está latindo!`;
    }
}

const dog = new Cachorro("Rex");
console.log(dog.som()); // Exibe: Rex está latindo!
