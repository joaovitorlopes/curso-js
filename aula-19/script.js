/*
Primitivos (Imutáveis)- strings, number, boolean, undefined, null (bigint, symbol) == VALORES COPIADOS
*/
//          0123
let nome = 'Joao';
nome[0] = 'R'; // string é imutável não causa troca da letra;
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia do valor atual
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);
/*
Referência (Mutável) - array, object e function. == VALORES POR REFERÊNCIA
*/
let a2 = [1, 2, 3];
let b2 = a2; // Aponta pro mesmo valor na memória;
let c2 = [...a2]; // Copia o valor de a2
console.log(a2, b2, c2);

a2.push(4); // Irá modificar b2 também, pois aponta para o mesmo valor na memória;
console.log(a2, b2, c2);

b2.pop(); // Irá remover de a2 também;
c2.pop(); // Irá remover apenas de c2 pois tem valor independente;
console.log(a2, b2, c2);

const pessoaA = {
    nome: 'João',
    sobrenome: 'Lopes'
};
const pessoaB = pessoaA; // pessoaB aponta para o mesmo local que pessoaA;
const pessoaC = {...pessoaA}; // copia o valor de pessoaA para pessoaC, sendo independente agora;
console.log(pessoaB);
console.log(pessoaC);
pessoaA.nome = 'Fulano'; // Modifica também o valor de pessoaB pois está em referência;
console.log(pessoaB); 
console.log(pessoaC); // O valor continua igual pois é idependente 