// Herança:
// Camiseta -> Cor, Caneca -> Material
// Abstraindo itens acima -> Produto
// Produtos tem aumento e desconto;
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valor) {
    this.preco += valor;
};
Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
};
//Especializar um produto
// Herança de Produto em Camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Definindo prototype;
Camiseta.prototype.constructor = Camiseta; // Definindo construtor para Camiseta;

Camiseta.prototype.aumento = function(percentual) { // Mudando aumento em Camiseta
    this.preco = this.preco = (this.preco * (percentual / 100));
};

const produto = new Produto('Genérico', 10);
const camiseta = new Camiseta('Regata', 25, 'Preta');
camiseta.aumento(10);
console.log(produto);
console.log(camiseta);

// Herança de Produto em Caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(quantidade) {
            if(typeof quantidade !== 'number') return;
            estoque = quantidade;
        },
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Marvel', 35, 'Cerâmica', 5);
caneca.estoque = 100;
console.log(caneca);
console.log(caneca.estoque);