// Revisão Arrays com strings:
// Arrays -> valores por referência;
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João'; // Altera o índice 2;
delete nomes[2]; // Remove os dados do índice 2, sem alterar os demais;
console.log(nomes);
//Pode-se usar construtor para criar arrays:
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
const novo = nomes2; // Referência
novo.pop(); // REMOVE o ÚLTIMO elemento;
console.log(nomes2); // Removendo em "novo", "nomes2" também será removido;
const outro = [...nomes2]; //Copia de "nomes2" para "outro";
console.log(outro.length); //Tamanho do array;
console.log(outro);
outro.shift(); // REMOVE o PRIMEIRO elemento;
console.log(outro);
outro.push('Karla'); // ADICIONA um novo elemento no FINAL;
console.log(outro);
outro.unshift('Fulano'); // ADICIONA um novo elemento no INICIO;
console.log(outro);

const nomes3 = ['Eduardo', 'João', 'Joana', 'Maria', 'Rosana'];
const fatiar = nomes3.slice(1, 3); // fatia o array do indice 1 ao 3, não sendo incluído o 3;
console.log(fatiar);

// CONVERTER STRING EM ARRAY:
const nomeCompleto = 'João Vitor Lopes';
const nomesArray = nomeCompleto.split(' ');// separar string por espaço;
console.log(nomesArray);
// CONVERTER ARRAY EM STRING:
const arrayToString = nomesArray.join(' ');// junta os elementos com espaço
console.log(arrayToString);