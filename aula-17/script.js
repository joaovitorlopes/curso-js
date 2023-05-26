// Função = executa ações
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('João');
console.log(variavel);
/* Função de soma */
function soma(x = 1, y = 1) { // Se não enviar um valor as variáveis assumem tais valores
    const resultado = x + y; // Não é possível acessar essa variável de fora da função
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));
/* Função anônima */
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
/* Arrow Function */
const exponenciacao = x => x ** 2;
console.log(exponenciacao(2));