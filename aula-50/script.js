/* PARÂMETROS DA FUNÇÃO */
// funções definidas com a palavra FUNCTION, possui uma variável chamada 'arguments', onde encontra-se todos os argumentos enviados;
function funcao() { // Pode existir ou não parâmetros;
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7); //Enviando argumentos(valores) para os parâmetros da função;

function soma(a, b = 2) { // Se o valor de b não for passado como argumento, ele receberá o valor 2;
    console.log(a + b);
}
soma(2);

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO NA FUNÇÃO:
function funcao2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao2({nome: 'Joao', sobrenome: 'Lopes', idade: 22});

// REST OPERATOR (...), deve ser o último parâmetro da função
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('+', 1, 20, 30, 40 , 50);