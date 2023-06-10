// CLASSES -> Função Construtoras;
//  Classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // Métodos:
    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

// Instanciando a classe pessoa (criando um objeto)
const p1 = new Pessoa('Joao', 'Lopes');
const p2 = new Pessoa('Karla', 'Schmohl');
const p3 = new Pessoa('Fulano', 'Silva');
const p4 = new Pessoa('Cicrano', 'Souza');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

// Função Construtora:
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Métodos deve estar no prototype:
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p5 = new Pessoa2('Teste', 'Constructor');
console.log(p5);