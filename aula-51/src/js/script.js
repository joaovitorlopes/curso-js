// RETORNO DA FUNÇÃO
// return
// Termina a função
function soma(a, b) {
    return console.log(a + b);
}
soma(2,5);

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Joao', 'Lopes');
console.log(p1);

// FUNÇÃO DENTRO DE OUTRA FUNÇÃO:
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto; // retorna a função sem executar ela
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);


// Uma função não retorna valor, mas faz alguma ação:
// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

