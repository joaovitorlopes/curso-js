// CONCATENANDO ARRAYS:
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2); // Concatena a1 com a2;
console.log(a3);
// ...(rest) ou ...(spread) "espalhar"
const a4 = [...a1, 'Joao', ...a2]; // concatenando array a1 e a2 com spread;
console.log(a4);