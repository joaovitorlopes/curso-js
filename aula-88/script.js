// PROMISES METHODS
// Utiliza-se em coisas assíncronas (Não sabe quando irá terminar)
// Métodos: Promise.all Promise.race Promise.resolve Promise.reject
//PROMISES -> "Promessas"
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitASecond(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }

            resolve(`${msg.toUpperCase()} - Passei na promise`);
        }, time);
    });
}

const promises = [
    waitASecond('Promise 1', rand(1, 5)),
    waitASecond('Promise 2', rand(1, 5)),
    waitASecond('Promise 3', rand(1, 5)),
    waitASecond(1000, rand(1, 5)),
];
// Resolve todas as promises, se der erro, é cancelado
Promise.all(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });
// Quem ser resolvido primeiro é retornado
Promise.race(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });

function downloadPage() {
    const inCache = false;

    if(inCache) {
        return Promise.resolve('Página em cache'); // Vai direto para o THEN
        // return Promise.reject('Página em cache'); // Vai direto para o CATCH
    } else {
        return waitASecond('Baixei a página', 3000);
    }
}

downloadPage()
    .then(pageData => {
        console.log(pageData);
    })
    .catch(e => console.log(`ERROR ${e}`));