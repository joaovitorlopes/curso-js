// CONSTRUCTOR FUNCTIONS:
// Criam novos objetos;
// Cria e retorna objetos automaticamente;
// Construtora -> Inicia-se com letra maiúscula! [Pessoa (new)]
function Pessoa(nome, sobrenome) { // Model
    // O corpo da função construtora já é o objeto criado;
    // Atributos ou métodos privados:
    const id = 123456;
    const metodoInterno = function() {
        return 0;
    };

    // Atributos ou métodos públicos (this):
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(`${this.nome}: sou um método`);
    };
}

const p1 = new Pessoa('João', 'Lopes');
const p2 = new Pessoa('Luiz', 'Silva');

p1.metodo();