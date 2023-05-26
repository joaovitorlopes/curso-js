// Curto-Circuito (Short-Circuit)
/*
&& -> false && true -> false "o valor mesmo";
|| -> true || false -> vai retornar "o valor verdadeiro";
*/

/*
--FALSY-- todos esses valores a baixo são considerados falso
*false
0
'' "" ``
null / undefined
NaN
*/
// AND
console.log('João Vitor' && 0 && 'Maria');

function falaOi (){
    return 'Oi';
}
let vaiExecutar;
console.log(vaiExecutar && falaOi()); // vai retornar undefined devido a vaiExercusar não ter valor;

// OR
console.log(0 || false || null || 'João' || true); // ele precisa de apenas um valor vedadeiro, e irá retornar o primeiro que encontrar;