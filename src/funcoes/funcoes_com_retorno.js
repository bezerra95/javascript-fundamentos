// funcoes-retorno.js

// === FUNÇÕES COM RETORNO ===
// Funções que devolvem valores.

console.log('=== FUNÇÕES COM RETORNO ===');

// Função com retorno básico
function quadrado(numero) {
    return numero * numero;
}

let valor = 5;
console.log(`O quadrado de ${valor} é: ${quadrado(valor)}`);

// Função que retorna outra função
function saudacao(tipo) {
    return function (nome) {
        console.log(`${tipo}, ${nome}!`);
    };
}

let cumprimentar = saudacao('Bom dia');
cumprimentar('Ana'); // Saída: Bom dia, Ana!
