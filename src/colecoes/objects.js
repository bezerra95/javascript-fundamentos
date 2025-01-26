// object.js

// Objects são coleções de pares chave-valor.
// Eles são úteis para armazenar dados estruturados.

// Criando um objeto
const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
};

// Acessando propriedades
console.log('Nome:', pessoa.nome); // Saída: João
console.log('Idade:', pessoa.idade); // Saída: 30

// Adicionando uma nova propriedade
pessoa.cidade = 'São Paulo';
console.log('Após adicionar cidade:', pessoa);

// Iterando sobre as propriedades do objeto
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
