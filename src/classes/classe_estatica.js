// classe-estatica.js

// === MÉTODOS ESTÁTICOS ===
// Métodos que pertencem à classe, não à instância.

console.log('=== MÉTODOS ESTÁTICOS ===');

class Utilidades {
    // Método estático para calcular o quadrado
    static quadrado(numero) {
        return numero * numero;
    }

    // Método estático para calcular a raiz quadrada
    static raizQuadrada(numero) {
        return Math.sqrt(numero);
    }
}

// Chamando métodos estáticos diretamente pela classe
console.log(`Quadrado de 4: ${Utilidades.quadrado(4)}`); // Saída: Quadrado de 4: 16
console.log(`Raiz quadrada de 16: ${Utilidades.raizQuadrada(16)}`); // Saída: Raiz quadrada de 16: 4
