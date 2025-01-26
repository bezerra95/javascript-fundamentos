// exemplo.js

// === Conceito de `null` e `undefined` ===
// `null`: Representa a ausência intencional de qualquer valor.
// `undefined`: Representa a ausência de um valor atribuído (não inicializado).

// Exemplo 1: Trabalhando com `undefined`
let valorNaoDefinido; // Variável declarada, mas sem valor atribuído
console.log('Valor:', valorNaoDefinido); // Saída: undefined
console.log('Tipo:', typeof valorNaoDefinido); // Saída: undefined

// Exemplo 2: Atribuindo `null` manualmente
let valorNulo = null; // Valor intencionalmente nulo
console.log('Valor:', valorNulo); // Saída: null
console.log('Tipo:', typeof valorNulo); // Saída: object (curiosidade: bug histórico do JavaScript)

// === Segurança Nula ===
// Para evitar erros relacionados a `null` ou `undefined`, podemos usar verificações de segurança.

// Exemplo 3: Verificação manual
let nome; // Variável sem valor atribuído
if (nome) {
    console.log('Nome está definido:', nome);
} else {
    console.log('Nome está nulo ou indefinido'); // Saída: Nome está nulo ou indefinido
}

// Exemplo 4: Operador de coalescência nula (??)
// O operador `??` retorna um valor padrão se a variável for `null` ou `undefined`.
let preco = null;
let precoPadrao = preco ?? 100; // Se `preco` for null/undefined, usa 100
console.log('Preço final:', precoPadrao); // Saída: 100

// Exemplo 5: Encadeamento opcional (?.)
// Permite acessar propriedades de objetos sem lançar um erro se a propriedade for `null` ou `undefined`.
let produto = {
    nome: 'Notebook',
    detalhes: null
};
console.log('Nome do produto:', produto.nome); // Saída: Notebook
console.log('Garantia:', produto.detalhes?.garantia); // Saída: undefined (sem erro)

// === Dicas para Segurança Nula ===

// 1. Sempre inicialize variáveis com valores padrão quando possível.
let total = 0; // Em vez de deixar `undefined`
console.log('Total inicializado:', total); // Saída: 0

// 2. Use o operador `??` para garantir valores padrão.
let quantidade = undefined;
console.log('Quantidade final:', quantidade ?? 1); // Saída: 1

// 3. Use encadeamento opcional para evitar erros em objetos profundos.
let pedido = {
    cliente: {
        nome: 'Julio'
    }
};
console.log('Nome do cliente:', pedido.cliente?.nome); // Saída: Julio
console.log('Endereço do cliente:', pedido.cliente?.endereco?.rua); // Saída: undefined
