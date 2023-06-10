// MÉTODOS ESTÁTICOS
// Podem ser acessados, sem instanciar a classe; (sem usar a palavra "new")
// São funções que estão dentro de uma classe;
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilhar() {
        // Não possuem acesso aos dados da instância (this)
        console.log('OK, pilhas trocadas!');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilhar(); // Método da classe e não da instância;