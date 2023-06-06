// Declaração de função (Function hoisting);
// As declarações são elevadas ao topo do script para serem interpretadas pelo JS;
// Podem ser chamada antes ou depois de ser declarada;
function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class objects (Objetos de primeira classe);
// Function expression:
const souUmDado = function () { // Uma constante recebe uma função como dado;
    console.log('Sou um dado.');
};
// souUmDado();
// Todas as funções são tratadas como objeto de primeira classe;
function executaFuncao(funcao) {
    console.log('Executando a função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow Function:
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto:
//Versão antiga:
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj.falar();
//Versão nova:
const obj2 = {
    falar() {
        console.log('Falando na versão nova!');
    }
};
obj2.falar();