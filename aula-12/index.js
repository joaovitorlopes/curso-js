let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let aux;

console.log(varA, varB, varC);
// Método usando uma nova variável 
aux = varA;
varA = varB;
varB = varC
varC = aux;
// Método mais moderno no JavaScript
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);