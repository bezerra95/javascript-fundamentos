// Exemplo de objeto simples
const pessoa = {
    nome: "Julio",         // Propriedade
    idade: 25,             // Propriedade
    saudacao: function() { // Método
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(pessoa.nome); // Exibe: Julio
console.log(pessoa.saudacao()); // Exibe: Olá, meu nome é Julio e tenho 25 anos.
