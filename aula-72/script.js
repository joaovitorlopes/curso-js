//GETTERS e SETTERS:
function Produto(nome, preco, estoque) {
    this.nome = nome; // this deixa público, acessível de fora da função
    this.preco = preco; // this deixa público, acessível de fora da função
    
    // Definindo a chave estoque:
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe a chave;
        // value: estoque, // valor da chave
        // writable: true, // Valor não é alterável;
        configurable: false, // Não pode ser redefinida ou apagada;
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('O valor deve ser numérico!');
            }
            estoque = valor;
        },
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome =  valor;
        },
    };
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 20;
console.log(p1);
console.log(p1.estoque);

const p2 = criaProduto('Caneca');
console.log(p2.nome);