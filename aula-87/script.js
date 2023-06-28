//PROMISES -> "Promessas"
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectDatabase(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

conectDatabase('Conexão com o BD', rand(1, 3))
    .then(reply => {
        console.log(reply);
        return conectDatabase('Buscando dados da BASE', rand(1, 3));
    })
    .then(reply => {
        console.log(reply);
        return conectDatabase(123345, rand(1, 3));
    })
    .then(reply => {
        console.log(reply);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log(`ERROR: ${e}`);
    });

console.log('Isso será executado antes da promise');