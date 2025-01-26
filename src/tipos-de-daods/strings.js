// string.js

// TIPO STRING
// Uma string é uma sequência de caracteres. Pode ser definida entre aspas simples (' '), aspas duplas (" ") ou crase (``) para templates.

// Exemplo de strings
const singleQuote = 'Esta é uma string com aspas simples.';
const doubleQuote = "Esta é uma string com aspas duplas.";
const templateString = `Esta é uma string template, que suporta interpolação.`;

// Exibindo as strings no console
console.log('String com aspas simples:', singleQuote);
console.log('String com aspas duplas:', doubleQuote);
console.log('String template:', templateString);

// Operações com strings
const nome = "Maria";
const mensagem = `Olá, ${nome}! Bem-vinda ao JavaScript.`; // Interpolação usando crase
console.log('Mensagem com interpolação:', mensagem);

const comprimento = singleQuote.length; // Calcula o comprimento da string
console.log('Comprimento da string:', comprimento);

const maiuscula = nome.toUpperCase(); // Transforma em maiúsculas
console.log('Nome em maiúsculas:', maiuscula);
