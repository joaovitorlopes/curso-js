// FILTER - Filtrando Array:
// Sempre retornar um array, com a mesma quantidade de elementos ou menos.

//Retorne os números maiores que 10:
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numbersFiltered = numbers.filter(value => value > 10); // recebe função de callback
console.log(numbersFiltered);


// Retorne as pessoas que tem o nome com 5 letras ou mais;
// Retorne as pessoas com mais de 40 anos;
// Retorne as pessoas cujo nome termina com A;
const person = [
    { name: 'João', age: 22 },
    { name: 'Karla', age: 21 },
    { name: 'Luiz', age: 19 },
    { name: 'Aminah', age: 19 },
    { name: 'Edmeia', age: 43 },
    { name: 'Claudia', age: 56 },
];

const lengthOfName = person.filter(object => object.name.length >= 5);
const olderPerson = person.filter(object => object.age > 40);
const endsName = person.filter(object => object.name.toLowerCase().endsWith('a'));
console.log(lengthOfName);
console.log(olderPerson);
console.log(endsName);