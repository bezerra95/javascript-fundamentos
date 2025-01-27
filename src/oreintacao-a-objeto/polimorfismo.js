class Forma {
    area() {
        return 0; // Forma padrão
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado; // Sobrescreve o método
    }
}

const forma = new Forma();
const quadrado = new Quadrado(4);

console.log(forma.area());      // Exibe: 0
console.log(quadrado.area());   // Exibe: 16
