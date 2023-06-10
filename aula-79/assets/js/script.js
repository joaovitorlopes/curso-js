// Factory Functions + Prototype;
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};

// Criando um prototype;
// const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    // definindo o prototype;
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const p1 = criaPessoa('João', 'Lopes');
const p2 = criaPessoa('Fulano', 'Souza');
console.log(p1);
console.log(p2);