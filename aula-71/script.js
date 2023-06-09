// Funções relacionadas as chaves do Objeto;
// defineProperty() -> define uma propriedade;
// defineProperties() -> define várias propriedades;
function Produto(nome, preco, estoque) {
    // this.nome = nome; // this deixa público, acessível de fora da função
    // this.preco = preco; // this deixa público, acessível de fora da função
    
    // Definindo a chave estoque:
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe a chave;
        value: estoque, // valor da chave
        writable: false, // Valor não é alterável;
        configurable: false, // Não pode ser redefinida ou apagada;
    });

    // Definindo as chaves nome e preco:
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // exibe a chave;
            value: nome, // valor da chave
            writable: true, // Valor não é alterável;
            configurable: true, // Não pode ser redefinida ou apagada;
        },
        preco: {
            enumerable: true, // exibe a chave;
            value: preco, // valor da chave
            writable: true, // Valor não é alterável;
            configurable: true, // Não pode ser redefinida ou apagada;
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); // Visualizar chaves do objeto;