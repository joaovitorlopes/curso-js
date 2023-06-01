//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO ARRAYS
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//desestruturação na esquerda, array na direita;
// ... rest(resto), ... spread(espalhar);
//        se deixar vazio entre virgulas ele não irá pegar esse índice. (, ,);
const [um, , tres, , cinco, , sete, ...resto] = numeros; // ...(operador rest) para pegar o resto de um array;
console.log(um, tres, cinco, sete);
console.log(resto);

//array dentro de outro array:
//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const teste = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//MODO NORMAL:
console.log(teste[1][2]); // para exibir o número 6, deve-se acessar o índice 1 do primeiro array, e o índice 2 do segundo;
//DESESTRUTURAÇÃO:
const [,[,,seis]] = teste;
const [lista1, lista2, lista3] = teste;
console.log(seis);
console.log(lista3[2]);