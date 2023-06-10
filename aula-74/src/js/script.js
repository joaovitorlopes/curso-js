// PROTOTYPES:

// Construtora -> molde (Classe);
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

//instância
const pessoa1 = new Pessoa('João', 'Lopes'); // Pessoa = função construtora
const data = new Date(); // Date = função construtora

console.dir(pessoa1);
console.dir(data);