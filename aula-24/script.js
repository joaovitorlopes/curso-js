/*IF, ELSE IF e ELSE */
// IF pode ser usado sozinho;
// Sempre que utilizo ELSE, necessita de um IF antes;
// ELSE IF pode haver vários;
// Só pode haver um ELSE no final;
const hora = 23;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}