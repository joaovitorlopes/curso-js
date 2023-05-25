let num1 = 10; // number
let num2 = 2.5; // number
let num3 = 10.57893218932103123; // number
console.log(num1 + num2);
// num1 = num1.toString(); // converte num1 para string
// console.log(num1.toString(2));
console.log(typeof num1);
console.log(num3.toFixed(2)); // arredondar
console.log(Number.isInteger(num1)); // verifica se é um número inteiro
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // verifica se não é um número
/* JS segure o padrão IEEE 754-2008, sendo impreciso */
let num4 = 0.7;
let num5 = 0.1;
/* Arredondando com funções */
// num4 = num4 + num5
num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0
num4 = Number(num4.toFixed(2)); // Usar essa função para ficar preciso!
console.log(num4);
console.log(Number.isInteger(num4)); 

/* Arredondando sem funções */
let num6 = 0.7;
let num7 = 0.1;
num6 = ((num6 * 100) + (num7 * 100)) / 100; // 0.8
num6 = ((num6 * 100) + (num7 * 100)) / 100; // 0.9
num6 = ((num6 * 100) + (num7 * 100)) / 100; // 1.0
console.log(num6);
console.log(Number.isInteger(num6));