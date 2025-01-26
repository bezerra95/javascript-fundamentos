// set.js

// Sets são coleções de valores únicos. Eles são úteis quando você precisa evitar duplicatas.

// Criando um Set
const numeros = new Set();

// Adicionando valores
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(1); // Este valor será ignorado porque já existe no Set

console.log('Valores no Set:', numeros); // Saída: {1, 2, 3}

// Verificando se um valor existe
console.log('Set contém 2?', numeros.has(2)); // Saída: true

// Iterando sobre o Set
numeros.forEach((numero) => {
    console.log('Número:', numero);
});
