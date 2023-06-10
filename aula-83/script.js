// Heranças em classes
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }
        
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado!`);
            return;
        }
        
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Celular');
// d1.ligar();
// console.log(d1);
// d1.ligar();
// d1.desligar();
// console.log(d1);
// d1.desligar();

// Criar uma nova classe para herdar (extends) de DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, modelo, cor) {
        super(nome); // instância o construtor da classe mãe;
        this.modelo = modelo;
        this.cor = cor;
    }
}

const s1 = new Smartphone('iPhone', '13 Pro Max', 'Cinza');
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, caneta) {
        super(nome);
        this.caneta = caneta;
    }
}

const t1 = new Tablet('Tab S6 Lite', true);
t1.ligar();
console.log(t1);