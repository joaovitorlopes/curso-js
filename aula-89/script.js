// ASYNC / AWAIT
// PROMISES -> "Promessas"
// Execução de forma assíncrona
function rand(min = 0, max = 3) {
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

// waitASecond('Fase 1', rand())
//     .then(value => {
//         console.log(value);
//         return waitASecond('Fase 2', rand());
//     })
//     .then(phase => {
//         console.log(phase);
//         return waitASecond('Fase 3', rand());
//     })
//     .then(phase => {
//         console.log(phase);
//     })
//     .catch(e => console.log(`ERROR: ${e}`));

async function execute() {
    try{
        const fase1 = await waitASecond('Fase 1', rand());
        console.log(fase1);
        const fase2 = await waitASecond(2, rand());
        console.log(fase2);
        const fase3 = await waitASecond('Fase 3', rand());
        console.log(fase3);
        console.log(`Terminamos na fase: ${fase3}`);
    } catch(e) {
        console.log(e);
    }
}
execute();

// pending -> pendente
// full filled -> resolvida
// rejected -> rejeitada
