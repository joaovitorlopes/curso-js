// IIFE -> Immediately Invoked Function Expression:
// Funções que são automaticamente executadas, quando criadas;
// Tais funções estão protegidas de qualquer outra coisa do escopo global.
(function() {
    const nome = 'João';
    console.log(nome);
})(); // Executa a função imediatamente.

(function(idade, peso, altura) { // Pode receber parâmetros;
    const sobrenome = 'Lopes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('João'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(22, 76, 1.80); // Pode-se passar argumentos.