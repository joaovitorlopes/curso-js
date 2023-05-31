// diferenças entre var e let
// Let tem escopo de bloco { ... bloco };
// Var tem escopo de função;
let nome = 'Joao'; // let não pode ser redeclarada usando let novamente;
var nome2 = 'Joao'; // var pode ser redeclarada usando var novamente, sendo sobrescrita;

var nome2 = 'Fulano'; // redeclarada;
console.log(nome, nome2);

const verdadeira = true;

if (verdadeira) {
    let nome = 'Vitor'; // criando variável dentro do bloco;
    var nome2 = 'Rogério'; // redeclarada;
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'; // criado novamente dentro de outro bloco;
        var nome2 = 'Ronaldo'; // redeclarada;
        console.log(nome); // procura de dentro pra fora a variável let;
    }
}

console.log(nome, nome2); // var sempre é redeclarada;

// Escopo de função
var sobrenome = 'Lopes';

function falaOi () {
    var nome = 'Luiz'; // pode ser usado apenas dentro da função;
    console.log(nome , sobrenome); // consegue pegar variáveis fora da função;
}

falaOi();

// Elevação de variável;
console.log(sobrenome);
var sobrenome = 'Lopes';