// js-typescript.ts

// === INTEROPERABILIDADE ENTRE JAVASCRIPT E TYPESCRIPT ===
// Exemplo de integração usando TypeScript

console.log('=== INTEROPERABILIDADE ENTRE JAVASCRIPT E TYPESCRIPT ===');

// Função com tipagem explícita
function somar(a: number, b: number): number {
    return a + b;
}

// Função que aceita um objeto com tipagem
interface Pessoa {
    nome: string;
    idade: number;
}

function apresentar(pessoa: Pessoa): string {
    return `Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`;
}

// Chamadas das funções
console.log('Soma:', somar(10, 5)); // Saída: Soma: 15

const pessoa: Pessoa = { nome: 'Ana', idade: 25 };
console.log(apresentar(pessoa)); // Saída: Olá, meu nome é Ana e eu tenho 25 anos.
