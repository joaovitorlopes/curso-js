// ESCOPO LÉXICO
const nome = 'João'; // variável no escopo global;

function falaNome() {
    const nome = 'Vitor';
    console.log(nome); //se a variável nome não estiver declarada dentro da função, a mesma acessa a variável que está fora de seu escopo;
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();