/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já visto:
Object.keys (Retorna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (Define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 10};
//const outraCoisa = produto; // apenas apontou para o mesmo endereço na memória;
const outraCoisa = { ...produto }; // copiar um objeto; (+ fácil de usar)

const caneca = Object.assign({}, produto, { material: 'porcelana' }); // Copia os dados do objeto;

outraCoisa.nome = 'Outro produto';
outraCoisa.preco = 1.80;
console.log(produto);
console.log(outraCoisa);
console.log(caneca);

Object.defineProperty(produto, 'nome', { // Mudando a propriedade da chave nome;
    writable: false,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Saber como está as propriedades do objeto

console.log(Object.keys(produto)); // Exibe as chaves de produto;
console.log(Object.values(produto)); // Exibe os valores das chaves de produto;
console.log(Object.entries(produto)); // Exibe as chaves e os valores de produto;