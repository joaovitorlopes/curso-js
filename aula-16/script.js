//            0123
const nome = 'João';
console.log(nome[0]);
//                 0       1       2         3
const alunos = ['Joao', 'Karla', 'Luiz', 'Abacate'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
/* Tamanho do Array */
console.log(alunos.length);
/* Editar Array */
alunos[0] = 'Vitor'; // Editando índice 0;
alunos[3] = 'Luiza'; // Criando um novo índice;
alunos[alunos.length] = 'Joana'; // Adicionando sabendo o último índice;
alunos[alunos.length] = 'Fábio'; // Adicionando sabendo o último índice;
alunos[alunos.length] = 'Renata'; // Adicionando sabendo o último índice;
alunos.push('Otávio'); // Adiciona ao final do array;
alunos.push('Jéssica'); // Adiciona ao final do array;
alunos.unshift('Cleiton'); // Adiciona no inicio do array
alunos.pop(); // Remove do final do array;
alunos.shift(); // Remove do começo do array;
delete alunos[3]; // Apaga o índice 3 do array, ficando vazio;
console.log(alunos);
/* Dividir Array */
const lista = ['A1', 'A2', 'A3'];
lista.push('A4');
lista.push('A5');
console.log(lista.slice(0, 3)); //Lista apenas 0 ao 2, precisando ser 1 a mais;
console.log(lista.slice(0, -1)); //Lista o array do final - 1;
/* Saber o tipo do array */
console.log(typeof lista);
console.log(lista instanceof Array);