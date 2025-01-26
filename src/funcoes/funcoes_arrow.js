// funcoes-arrow.js

// === FUNÇÕES ARROW ===
// Forma mais curta e moderna de declarar funções.

console.log('=== FUNÇÕES ARROW ===');

// Função básica
const saudacao = () => {
    console.log('Olá! Esta é uma função arrow.');
};

// Chamando a função
saudacao();

// Função com retorno direto
const soma = (a, b) => a + b;

// Chamando a função
console.log(`A soma de 6 e 4 é: ${soma(6, 4)}`);

// Função com apenas um parâmetro
const dobro = numero => numero * 2;

console.log(`O dobro de 5 é: ${dobro(5)}`);
