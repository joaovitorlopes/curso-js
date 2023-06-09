// Revisando Objetos:
// Objeto literal -> {}
const pessoa = { 
    // Objeto de forma literal
    nome: 'João',
    sobrenome: 'Lopes'
};
console.log(pessoa.nome); // pode utilizar notação de ponto;
console.log(pessoa['sobrenome']); // ou notação de colchetes;

// CONSTRUTOR PARA CRIAR UM OBJETO:
const pessoa1 = new Object();
pessoa1.nome = 'Fulano';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 33;
pessoa1.falarNome = function() {
    return (`Meu nome é ${this.nome}`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1['nome']);
console.log(pessoa1.sobrenome);
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
delete pessoa1.nome;
console.log(pessoa1);

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

// Models -> Factory Function e Constructor Function

//Factory Functions:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('João', 'Lopes');
console.log(p1.nomeCompleto);

// Constructor Function:
// Começa com a primeira letra maiúscula!
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// utiliza-se a palavra "new", que cria um objeto vazio {};
// vincula a palavra "this" a esse objeto vazio;
// retornando o this;
const p2 = new Pessoa('Karla', 'Schmohl');
console.log(p2);
Object.freeze(); // Bloqueia alteração no objeto p2;