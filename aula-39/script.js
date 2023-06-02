// ESTRUTURA DE REPETIÇÃO - While / Do While
// Não se sabe quantas vezes irá acontecer a repetição
// Enquanto verdadeiro acontecerá repetição
let i = 0;
while (i <= 3) {
    console.log(i);
    i++;
}

//GERAR NUM ALEATÓRIO DE 0 A 50;
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

// WHILE - VERIFICA ANTES E DEPOIS EXECUTA;
while (rand !== 10) { // verifica condição e depois executa a ação;
    rand = random(min, max);
    console.log(rand);
}

// DO WHILE - EXECUTA E DEPOIS VERIFICA;
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);