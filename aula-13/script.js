let umaString = "Um \"texto\""; // \ para escapar o caracter;
let outraString = "O rato roeu a roupa do rei de roma.";
/* Indexação nas strings */
console.log(umaString[5]); // índice 5 da string;
console.log(umaString.charAt(5)); // índice 5 da string;
console.log(umaString.indexOf('texto')); // encontra em qual índice começa a palavra texto;
console.log(umaString.lastIndexOf('m' , 3)); // encontra em qual índice da esquerda para a direita apartir do 3 índice está a letra m;
/* Concatenação nas strings */
console.log(umaString.concat(' em um lindo dia.')); // concatenar na string;
console.log(umaString + 'em um lindo dia.'); // concatenar na string;
console.log(`${umaString} em um lindo dia.`); // concatenar na string; *melhor*
/* Expressões regulares */
console.log(umaString.match(/[a-z]/g)); // encontra todas as letras minúsculas de um texto;
console.log(umaString.search(/[a-z]/)); // procura em qual índice irá encontrar letras minúsculas;
console.log(umaString.replace(/Um/, 'Outra')); // Substituição com expressões regulares;
console.log(outraString.replace(/r/g, '#')); // Substitui todas as letras r por # devido a tag g;
/* Substituir palavras */
console.log(umaString.replace('Um', 'Outra')); // Substitui a palavra Um para Outra;
/* Verificar tamanho da string */
console.log(outraString.length); // tamanho da string;
/* Dividir strings */
console.log(outraString.slice(2, 6)); // dividir string, para pegar a palavra 'rato', deve-se pegar 1 índice a mais;
console.log(outraString.slice(-5, -1)); // dividir string, tamanho total - 5 índices;
console.log(outraString.substring(outraString.length - 5, outraString.length - 1)); // tira uma substring da string para dividi-la;
console.log(outraString.split(' ')); // divide a string onde encontrar tal caracter; *melhor*
console.log(outraString.split(' ', 3)); // divide a string onde encontrar tal caracter com limite de vezes;
/* Modificações na string */
console.log(outraString.toUpperCase()); // string fica toda maiúscula;
console.log(outraString.toLowerCase()); // string fica toda minúscula;
