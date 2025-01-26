// exemplo.js

// JavaScript utiliza inferência de tipo ao declarar variáveis usando `let` ou `const`.
// Isso significa que a linguagem identifica automaticamente o tipo do dado atribuído.

// Declarando uma variável com valor inicial
let numero = 42; // Aqui, o tipo inferido é "Number"
console.log('Número:', numero); // Saída: 42
console.log('Tipo de dado:', typeof numero); // Saída: number

// Alterando o valor de uma variável
numero = 'Quarenta e dois'; // O tipo agora é inferido como "String"
console.log('Número alterado:', numero); // Saída: Quarenta e dois
console.log('Novo tipo de dado:', typeof numero); // Saída: string

// Com constantes
const texto = 'Olá, mundo!'; // Tipo inferido é "String"
console.log('Texto:', texto); // Saída: Olá, mundo!
console.log('Tipo de dado:', typeof texto); // Saída: string

// Observação: constantes não podem ser reatribuídas
// texto = 123; // Isso resultaria em um erro: "Assignment to constant variable."

// Tipos dinâmicos
let valor = true; // Inicialmente, o tipo é "Boolean"
console.log('Valor:', valor); // Saída: true
console.log('Tipo de dado:', typeof valor); // Saída: boolean

valor = 100; // Agora o tipo é "Number"
console.log('Novo valor:', valor); // Saída: 100
console.log('Novo tipo de dado:', typeof valor); // Saída: number

// Inferência com arrays
let lista = [1, 2, 3]; // Tipo inferido é "Object" (arrays são um subtipo de objetos)
console.log('Lista:', lista); // Saída: [1, 2, 3]
console.log('Tipo de dado:', typeof lista); // Saída: object
