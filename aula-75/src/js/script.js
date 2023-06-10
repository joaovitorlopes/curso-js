// Manipulando Prototypes:
// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype
};
const objB = {
    chaveB: 'B',
    // __proto__: objA
};
Object.setPrototypeOf(objB, objA); //Definindo objA como prototype de objB;
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

// Objeto Literal
const p2 = {
    nome: 'Caneca',
    preco: 25,
}
Object.setPrototypeOf(p2, Produto.prototype); // Definir prototype de p2, igual o de Produto;

p2.aumento(5)
console.log(p1);
console.log(p2);

// Criar objeto, já definindo seu Prototype
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aumento(10);
console.log(p3);