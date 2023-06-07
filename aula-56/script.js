// Factory Functions:
// São funções que retornam objetos;
// Quando uma função está dentro de um objeto, ela se chama Método;
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(); // Retorna o primeiro valor do array;
            this.sobrenome = valor.join(' ');
        },
        //Método
        fala(assunto) {
// UTILIZA-SE "THIS" PARA SE REFERIR AO OBJETO QUE ESTÁ CHAMANDO O MÉTODO;
            return `${this.nome}: ${assunto}`;
        },
        altura,
        peso,
        //Getter
        get imc() {
            const calc = this.peso / (this.altura ** 2);
            return calc.toFixed(2);
        }
    };
}

const p1 = criaPessoa('João', 'Lopes', 1.80, 76);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Fulaninho de Souza';
console.log(p1.nomeCompleto);
console.log(p1.fala('Estou testando essa função'));