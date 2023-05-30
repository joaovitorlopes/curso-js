const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'});



// const h1 = document.querySelector('.container h1');
// const data = new Date();


// function getDiaSemanaTexto (diaSemana) {
//     const diasSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
//     return diasSemana[diaSemana];
// }

// function getDiaSemanaTexto(diaSemana) {
//     let diaDaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaDaSemanaTexto = 'Domingo';
//             return diaDaSemanaTexto;
//         case 1:
//             diaDaSemanaTexto = 'Segunda-feira';
//             return diaDaSemanaTexto;
//         case 2:
//             diaDaSemanaTexto = 'Terça-feira';
//             return diaDaSemanaTexto;
//         case 3:
//             diaDaSemanaTexto = 'Quarta-feira';
//             return diaDaSemanaTexto;
//         case 4:
//             diaDaSemanaTexto = 'Quinta-feira';
//             return diaDaSemanaTexto;
//         case 5:
//             diaDaSemanaTexto = 'Sexta-feira';
//             return diaDaSemanaTexto;
//         case 6:
//             diaDaSemanaTexto = 'Sábado';
//             return diaDaSemanaTexto;
//         default:
//             diaDaSemanaTexto = '';
//             return diaDaSemanaTexto;
//     }
// }

// function getNomeMes (numeroMes) {
//     const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
//     return meses[numeroMes];
// }

// function getMesTexto(mes) {
//     let mesTexto;
//     switch (mes) {
//         case 0:
//             mesTexto = 'Janeiro';
//             return mesTexto;
//         case 1:
//             mesTexto = 'Fevereiro';
//             return mesTexto;
//         case 2:
//             mesTexto = 'Março';
//             return mesTexto;
//         case 3:
//             mesTexto = 'Abril';
//             return mesTexto;
//         case 4:
//             mesTexto = 'Maio';
//             return mesTexto;
//         case 5:
//             mesTexto = 'Junho';
//             return mesTexto;
//         case 6:
//             mesTexto = 'Julho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'Agosto';
//             return mesTexto;
//         case 8:
//             mesTexto = 'Setembro';
//             return mesTexto;
//         case 9:
//             mesTexto = 'Outubro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'Novembro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'Dezembro';
//             return mesTexto;
//     }
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createDate (data) {
//     const diaSemana = data.getDate();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getMesTexto(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
// }

// h1.innerHTML = createDate(data);