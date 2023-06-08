// MÉTODO SPLICE;
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//splice(índice, delete, adicionar elementos);

// Remover elementos:
const removidos = nomes.splice(4, 1); //começa no índice 4, remove 1 elemento;
console.log(nomes, removidos);
nomes.splice(-1, Number.MAX_VALUE); // no último índice, remove até o final(infinito);
console.log(nomes);

// TROCAR ELEMENTO:
nomes.splice(2, 1, 'Karla'); // no índice 2, remove o elemento e adiciona o elemento 'Karla' no lugar;
console.log(nomes);

// POP(remove último):
nomes.splice(-1, 1); // remove o último elemento;
console.log(nomes);

// SHIFT(remove o primeiro):
nomes.splice(0, 1); // remove o primeiro elemento;
console.log(nomes);

// PUSH(adiciona último):
nomes.splice(nomes.length, 0, 'Fulano'); // adiciona no final;
console.log(nomes);

// UNSHIFT(adiciona no começo):
nomes.splice(0, 0, 'José', 'Beltrano', 'Cicrano'); // adiciona no final;
console.log(nomes);