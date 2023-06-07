//CLOSURES -> habilidade da função acessar o seu escopo léxico;
// A função sabe qual variável buscar, mesmo estando fora de seu escopo;
// ESCOPO GLOBAL
function retornaFuncao() {
    const nome = 'João';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao); // retorna uma function anonymous
console.dir(funcao());