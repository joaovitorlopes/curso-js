// Função Construtora Date;
// const quatroHoras = 60 * 60 * 4 * 1000;
// //               1h  *  24 = 24h * 1000ms = 1 dia em milesimos de segundos;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + quatroHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(); // Data nesse momento
console.log(data.toString());
//                        ano mes dia hr  min sec ms; meses em JS é de 0 - 11
const setData = new Date(2023, 3, 20, 15, 14, 27, 500); // 20/04/2023 às 15:14:27 e 500 ms
console.log(setData.toString());
const stringData = new Date('2023-04-20 20:20:59'); // data em formato de string
console.log(stringData.toString());
console.log('Dia', stringData.getDate());//Pega o dia
console.log('Mês', stringData.getMonth() + 1);//Pega o mês; +1 devido ser de 0 a 11 em JS
console.log('Ano', stringData.getFullYear());//Pega o ano
console.log('Hora', stringData.getHours());//Pega a hora
console.log('Minutos', stringData.getMinutes());//Pega os minutos
console.log('Segundos', stringData.getSeconds());//Pega os segundos
console.log('Milissegundos', stringData.getMilliseconds());//Pega os milissegundos
console.log('Dia da semana', stringData.getDay());//Pega o dia da semana 0 - Domingo, 6 - Sábado

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const novaData = new Date();
const dataBrasil = formataData(novaData);
console.log(dataBrasil);