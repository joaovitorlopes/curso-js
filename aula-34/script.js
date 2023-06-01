//ESTRUTURA DE REPETIÇÃO - FOR CLÁSSICO
// dentro do for: variável, condição e incrementar ou decrementar;
for (let i = 0; i <= 5; i++) { // i - index
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}