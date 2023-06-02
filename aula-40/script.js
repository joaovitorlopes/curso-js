//BREAK e CONTINUE
// FUNCIONAM EM TODOS OS LAÇOS (FOR, FOR IN, FOR OF, WHILE, DO WHILE);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// EXEMPLO COM FOR
for (let numero of numeros) {
    
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // PULA PRA PRÓXIMA AÇÃO
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // QUEBRA O LAÇO
    }
}

// EXEMPLO COM WHILE
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++; // DEVE COLOCAR O INCREMENTO PARA NÃO FICAR EM UM LOOP INFINITO;
        continue; // PULA PRA PRÓXIMA AÇÃO;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++; // DEVE COLOCAR O INCREMENTO PARA NÃO FICAR EM UM LOOP INFINITO;
        break; // QUEBRA O LAÇO;
    }
    i++; // DEVE COLOCAR O INCREMENTO PARA NÃO FICAR EM UM LOOP INFINITO;
}