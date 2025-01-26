// funcoes-expressao.js

// === FUNÇÕES EXPRESSAS ===
// Funções atribuídas a variáveis.

console.log('=== FUNÇÕES EXPRESSAS ===');

// Função anônima atribuída a uma variável
const subtracao = function (a, b) {
    return a - b;
};

// Chamando a função
let resultado = subtracao(10, 4);
console.log(`O resultado da subtração é: ${resultado}`);

// Função nomeada atribuída a uma variável
const multiplicacao = function multiplicar(a, b) {
    return a * b;
};

console.log(`O resultado da multiplicação é: ${multiplicacao(4, 7)}`);
