/* Arredondando números */
let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda para o número inteiro mais próximo a baixo;
let num3 = Math.ceil(num1); // Arredonda para o número inteiro mais próximo a cima;
let num4 = Math.round(num1); // Arredonda para o número inteiro mais próximo;
console.log(num2);
console.log(num3);
console.log(num4);
/* Encontrar números em uma sequência */
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Maior número da sequência;
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Menor número da sequência;
/* Gerando números aleatórios */
let a = Math.random(); // número aleatório entre 0 e 1
console.log(a);
let aleatorio = Math.random() * (10 - 5) + 5; // Número aleatório entre 10 e 5;
console.log(aleatorio);
aleatorio = Math.round(Math.random() * (10 -5) + 5); //Números aleatórios entre 10 e 5 inteiros;
console.log(aleatorio);
/* Objetos de funções matemáticas */
console.log(Math.PI); // valor de PI;
console.log(Math.pow(2, 10)); // Exponenciação com objeto;
console.log(2 ** 10); // Exponenciação sem objeto;
/* Raiz quadrada */
let raiz = 9;
console.log(raiz ** (1/2)); // raiz quadrada de 9;
console.log(raiz ** 0.5); // raiz quadrada de 9;
/* Número dividido por 0 */
console.log(100 / 0); // retorna infinito
console.log(!!(100 / 0)); // validar se está certo