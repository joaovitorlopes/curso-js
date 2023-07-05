// INSTALAÇÃO BABEL:
// npm init -y
// npm install --save-dev @babel/cli @babel/preset-env @babel/core

// USANDO BABEL P/ CRIAR SCRIPT ANTIGO:
// npx babel main.js -o bundle.js --presets=@babel/env

// Para sempre executar atualização no script antigo, deve-se criar uma nova chave "babel" no arquivo "package.json"

// Para sempre verificar atualizações no "main.js":
// npm run babel

const nome = 'João';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}