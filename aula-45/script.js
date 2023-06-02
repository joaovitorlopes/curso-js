// TRATANDO E LANÇANDO ERROS (try, catch, finally)
try {
    // É executada quando NÃO há erros
    console.log('Abri um arquivo');
    console.log('Fechei o arquivo');
} catch (e) {
    // É executada quando HÁ erros
    console.log('Tratando o erro');
} finally {
    // Sempre é execitado
    console.log('FINALLY: Eu sempre sou executado!');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}