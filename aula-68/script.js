// FILTER + MAP + REDUCE
// Unir as três funcionalidades

// Retorne a soma do dobro de todos os pares;
// Filtrar pares;
// Dobrar valores;
// Reduzir (somar tudo);
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const sumEvenNumbers = numbers
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac + value);

console.log(sumEvenNumbers);