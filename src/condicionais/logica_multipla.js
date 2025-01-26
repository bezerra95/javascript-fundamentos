// logica-multipla.js

// === CONDICIONAL COM MÚLTIPLAS CONDIÇÕES ===
// Usando operadores lógicos AND (&&), OR (||) e NOT (!).

console.log('=== MULTIPLAS CONDICIONAIS ===');

// Verificar entrada em um evento
let temIngresso = true;
let idadePermitida = 16;

if (temIngresso && idadePermitida >= 18) {
    console.log('Você pode entrar no evento.');
} else {
    console.log('Entrada não permitida.');
}

// Usar negação para verificar uma condição
let estaChovendo = false;

if (!estaChovendo) {
    console.log('Você não precisa de guarda-chuva.');
} else {
    console.log('Leve um guarda-chuva.');
}
