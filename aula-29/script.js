// Switch case
function getDiaSemanaTexto(diaSemana) {
    let diaDaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = 'Segunda-feira';
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = 'Terça-feira';
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = 'Quarta-feira';
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = 'Quinta-feira';
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = 'Sexta-feira';
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = 'Sábado';
            return diaDaSemanaTexto;
        default:
            diaDaSemanaTexto = '';
            return diaDaSemanaTexto;
    }
}

const data = new Date('2001-06-05 00:00:00');
const diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);

console.log(diaDaSemana, diaSemanaTexto);
