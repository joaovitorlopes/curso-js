/*
Fulano Sobrenome tem X anos, pesa X kg, tem X de altura e seu IMC é de X
*/
const nome = 'João Vitor';
const sobrenome = 'Lopes';
const idade = 22;
const peso = 75;
const alturaEmM = 1.8;
let indiceMassaCorporal;
let anoNascimento
anoNascimento = 2023 - idade;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg, tem',alturaEmM, 'e seu IMC é de', indiceMassaCorporal + '.');
console.log(nome, 'nasceu em', anoNascimento + '.');
// Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);