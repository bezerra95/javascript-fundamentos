class ContaBancaria {
    #saldo = 0; // Propriedade privada (não pode ser acessada diretamente)

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return `Depositado: R$${valor}`;
        }
        return "Valor inválido.";
    }

    getSaldo() { // Método para acessar o saldo
        return `Saldo: R$${this.#saldo}`;
    }
}

const minhaConta = new ContaBancaria();
console.log(minhaConta.depositar(100)); // Exibe: Depositado: R$100
console.log(minhaConta.getSaldo());    // Exibe: Saldo: R$100
