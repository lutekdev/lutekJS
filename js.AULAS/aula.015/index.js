const nome = {
    nome: 'João', sobrenome: 'Silva', nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
};

console.log(nome.nomeCompleto());