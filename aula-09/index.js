//LET vs VAR
//ECMAScript 2015 (ES6) JavaScript
var nomeVar = 'Joao';
var nomeVar = 'Vitor';
//VAR pode-se re-declarar a variavel
//LET não pode
let nomeLet = 'Joao';
nomeLet = 'Teste' // errado
console.log(nomeVar);
console.log(nomeLet);
/* ******************************************************************* */
// Dados primitivos -> string, number, undefined, null, boolean, symbol
const nome = 'Joao'; // string
const nome1 = 'Joao'; // string
const nome2 = 'Joao'; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)
console.log(typeof sobrenomeAluno, sobrenomeAluno);