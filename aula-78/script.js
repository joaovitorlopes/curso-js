// Polimorfismo:
// Métodos comportam-se de outra maneira em sub-classes(Filhas de classe);
// Classe = Função Construtora;

// Superclass ou Classe Mãe/Pai:
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.realizarSaque = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.consultarSaldo();
};
Conta.prototype.realizarDeposito = function(valor) {
    this.saldo += valor;
    this.consultarSaldo();
};
Conta.prototype.consultarSaldo = function() {
    console.log(`Ag./C: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(1789, 55632, 10);
// console.log(conta1);
// conta1.realizarDeposito(50);
// conta1.realizarSaque(61);

// Especializar a Superclasse:
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype); // Herdando prototype;
ContaCorrente.prototype.constructor = ContaCorrente; // Definindo Construtor;

ContaCorrente.prototype.realizarSaque = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.consultarSaldo();
};

const cc = new ContaCorrente(1789, 55893, 0, 200);
cc.realizarDeposito(10);
cc.realizarSaque(90);

console.log('---------');

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
};

ContaPoupanca.prototype = Object.create(Conta.prototype); // Herdando prototype;
ContaPoupanca.prototype.constructor = ContaPoupanca; // Definindo Construtor;

const cp = new ContaPoupanca(1752, 13427, 0);
cp.realizarDeposito(10);
cp.realizarSaque(90);
cp.realizarSaque(1);