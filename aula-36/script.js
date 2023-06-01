// ESTRUTURA DE REPETIÇÃO
const frutas = ['Maçã', 'Banana', 'Uva'];
const pessoa = {
    nome: 'Joao',
    sobrenome: 'Lopes',
    idade: 22
};
console.log(pessoa.nome); // acessar chave de um objeto
console.log(pessoa['nome']);// acessar chave de um objeto

// FOR IN -> lê os índices do array ou chaves do objeto;
for (let i in frutas) {
    console.log(frutas[i]);
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// FOR CLÁSSICO
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}