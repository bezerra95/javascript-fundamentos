// funcoes-parametros.js

// === FUNÇÕES COM PARÂMETROS ===
// Como trabalhar com parâmetros em funções.

console.log('=== FUNÇÕES COM PARÂMETROS ===');

// Parâmetros padrão
function cumprimentar(nome = 'Visitante') {
    console.log(`Olá, ${nome}!`);
}

// Chamando a função com e sem argumentos
cumprimentar('João'); // Saída: Olá, João!
cumprimentar(); // Saída: Olá, Visitante!

// Trabalhando com parâmetros rest
function somarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(`A soma total é: ${somarTodos(1, 2, 3, 4, 5)}`);
