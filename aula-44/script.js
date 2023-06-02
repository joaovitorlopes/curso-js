// TRATANDO E LANÇANDO ERROS (try, catch, throw)
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y;
}

try { // tentar
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) { // se der erro, retorna isso
    // console.log(error);
    console.log('Deu erro');
}