// classe-metodos.js

// === CLASSES COM MÉTODOS ===
// Métodos adicionais em classes.

console.log('=== CLASSES COM MÉTODOS ===');

class Calculadora {
    // Método para somar dois números
    somar(a, b) {
        return a + b;
    }

    // Método para subtrair dois números
    subtrair(a, b) {
        return a - b;
    }

    // Método para multiplicar dois números
    multiplicar(a, b) {
        return a * b;
    }

    // Método para dividir dois números
    dividir(a, b) {
        if (b === 0) {
            console.log('Erro: Divisão por zero não é permitida.');
            return null;
        }
        return a / b;
    }
}

// Criando uma instância da classe
const calculadora = new Calculadora();

// Usando os métodos
console.log(`Soma: ${calculadora.somar(5, 3)}`); // Saída: Soma: 8
console.log(`Divisão: ${calculadora.dividir(10, 2)}`); // Saída: Divisão: 5
console.log(`Erro: ${calculadora.dividir(10, 0)}`); // Saída: Erro: Divisão por zero não é permitida.
