// REDUCE - Reduzindo o Array
// Reduz uma lista a um único valor;
// Não é indicado usar reduce para manipular arrays, com a função de map ou filter;

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers.reduce(function(accumulator, value, index, array) {
    accumulator += value;
    return accumulator;
}, 0); // valor inicial do acumulador
console.log(total);

// Usando reduce como filter:
const evenNumbers = numbers.reduce(function(accumulator, value, index, array) {
    if(value % 2 === 0) accumulator.push(value);
    return accumulator;
}, []); // valor inicial do acumulador
console.log(evenNumbers);

// Usando reduce como map:
const double = numbers.reduce(function(accumulator, value) {
    accumulator.push(value * 2);
    return accumulator;
}, []); // valor inicial do acumulador
console.log(double);

// Retorne a pessoa mais velha (reduce):
const person = [
    { name: 'João', age: 22 },
    { name: 'Karla', age: 21 },
    { name: 'Luiz', age: 19 },
    { name: 'Aminah', age: 19 },
    { name: 'Edmeia', age: 43 },
    { name: 'Claudia', age: 56 },
];

const olderPerson = person.reduce(function(accumulator, value) {
    if(accumulator.age > value.age) return accumulator;
    return value;
});
console.log(olderPerson);