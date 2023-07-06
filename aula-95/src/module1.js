export const nome = 'João';
export const sobrenome = 'Lopes';
export const idade = 22;

// Exportando como padrão
export default function soma(x, y) { 
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

//export { nome, sobrenome, idade, soma as default };