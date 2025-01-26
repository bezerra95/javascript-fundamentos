// falsy-truthy.js

// === FALSY E TRUTHY ===
// Valores "falsy" são tratados como falsos em condicionais.
// Valores "truthy" são tratados como verdadeiros.

console.log('=== FALSY E TRUTHY ===');

let valor1 = 0; // Um valor "falsy"
let valor2 = 'Olá'; // Um valor "truthy"

if (valor1) {
    console.log('O valor1 é truthy.');
} else {
    console.log('O valor1 é falsy.'); // Saída: O valor1 é falsy.
}

if (valor2) {
    console.log('O valor2 é truthy.'); // Saída: O valor2 é truthy.
} else {
    console.log('O valor2 é falsy.');
}
