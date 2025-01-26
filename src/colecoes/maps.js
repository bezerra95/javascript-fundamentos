// map.js

// Maps são coleções de pares chave-valor que mantêm a ordem de inserção.
// Diferentemente de objetos, as chaves podem ser de qualquer tipo.

// Criando um Map
const mapa = new Map();

// Adicionando elementos
mapa.set('nome', 'Ana');
mapa.set(42, 'Resposta');
mapa.set(true, 'Verdadeiro');

// Acessando valores
console.log('Nome:', mapa.get('nome')); // Saída: Ana
console.log('Resposta:', mapa.get(42)); // Saída: Resposta

// Iterando sobre o Map
mapa.forEach((valor, chave) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
});
