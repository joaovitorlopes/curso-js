// ESTRUTURA DE REPETIÇÃO

const nome = 'Joao Vitor'; // String é iterável (tem índice)
// FOR OF -> retorna o valor em sí (iteráveis, arrays ou strings)
console.log('###FOR OF###');
for (let valor of nome) { // retorna valor do índice
    console.log(valor);
} 

console.log('###FOR CLASSIC###');
// FOR CLÁSSICO -> Para iteráveis (array ou strings)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('###FOR IN###');
// FOR IN -> retorna o índice ou chave (string, array ou objetos)
for (let i in nome) { // retorna índice
    console.log(nome[i]);
} 
