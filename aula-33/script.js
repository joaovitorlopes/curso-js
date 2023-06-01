//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO OBJETOS
const pessoa = {
    nome: 'Joao',
    sobrenome: 'Lopes',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
//ATRIBUIÇÃO NORMAL:
const nomePessoa = pessoa.nome;
console.log(nomePessoa);
//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO:
const { nome: n, sobrenome, endereco: {rua, numero} } = pessoa;
console.log(n, sobrenome, rua, numero);