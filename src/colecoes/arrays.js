// array.js

// Arrays são coleções ordenadas de elementos, que podem ser acessados por índices (0, 1, 2...).
// Aqui estão exemplos de como criar, acessar e manipular arrays:

// Criando um array
const frutas = ['Maçã', 'Banana', 'Laranja'];

// Acessando elementos do array
console.log('Primeira fruta:', frutas[0]); // Saída: Maçã

// Adicionando um elemento ao final do array
frutas.push('Manga');
console.log('Após adicionar Manga:', frutas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Manga']

// Removendo o último elemento
frutas.pop();
console.log('Após remover o último elemento:', frutas); // Saída: ['Maçã', 'Banana', 'Laranja']

// Iterando sobre o array
frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}:`, fruta);
});
