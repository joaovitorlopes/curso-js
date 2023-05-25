let contador = 1;
contador++; //mostra o valor e incrementa depois
++contador; //incrementa o valor e mostra o novo resultado
contador++;
--contador; //decrementa o valor e mostra o novo resultado
contador --; //mostra o valor e decrementa depois
console.log(contador);
/* ***************************************************** */
const step = 2;
let number = 0;
// number = number + step;
number += step;
console.log(number);

//NaN - Not a Number
const num1 = 10;
const num2 = 'Joao';
console.log(num1*num2);

//Converter string para inteiro
const num3 = 10;
const num4 = parseInt('5'); // parse para Inteiro
const num5 = parseFloat('5.8'); // parse para Float
const num6 = Number('2.0'); //Ele consegue atribuir o tipo certo
console.log(num3+num4+num5+num6);