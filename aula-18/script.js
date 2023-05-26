// Objetos {}
const pessoa1 = {
    nome: 'João', // atributos
    sobrenome: 'Lopes', // atributos
    idade: 25 // atributos
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
/* Função para criar objetos */
//                        PARAMETROS
function criarPessoa (nome, sobrenome, idade) { // factory function
    return { // RETORNA OBJETO
        nome: nome, // atributos
        sobrenome: sobrenome, // atributos
        idade: idade // atributos
    };
}
// Quando os parametros possuem nomes iguais aos atributos do objeto não precisa repetir ficando assim:
function criarPessoa2 (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
//                           ARGUMENTOS = VALOR PASSADO PARA O PARAMETRO
const pessoa2 = criarPessoa('Karla', 'Schmohl', 21);
const pessoa3 = criarPessoa('Fulano', 'Silva', 30);
const pessoa4 = criarPessoa('Beltrano', 'Sicrano', 55);
const pessoa5 = criarPessoa('Luiz', 'Alves', 19);
console.log(pessoa2.nome, pessoa5.nome);
/* FUNÇÕES DENTRO DE OBJETOS SÃO CHAMADAS DE MÉTODOS */
const pessoaFun = {
    nome: 'Fulano',
    sobrenome: 'Silva',
    idade: 25,

    fala () { // MÉTODO QUE EXECUTA AÇÃO
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade () { // MÉTODO
        this.idade++;
    }
};
pessoaFun.fala();
pessoaFun.incrementaIdade();
pessoaFun.fala();