function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        timeStyle: 'medium'
    });
}

// function funcaoDoInterval () {
//     console.log(mostraHora());
// }
// setInterval(funcaoDoInterval, 1000); // sem () não executa a função, mas passa a referência;
const timer = setInterval(function() { // usando função anônima
    console.log(mostraHora());
}, 1000);

setTimeout(function() { // função para parar o setInterval
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);