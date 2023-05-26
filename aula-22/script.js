/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras p/ retornar true;
|| -> OR  -> OU
!  -> NOT -> NÃO
*/
/* AND */
const expressaoAnd = true && true && true && false; // Tudo precisa ser verdadeiro para retornar verdadeiro, caso contrário é falso;
console.log(expressaoAnd); // Se haver um falso, tudo será falso; 
/* OR */
const expressaoOr = false || false || true || false; // Se houver um verdadeiro, tudo será verdadeiro
console.log(expressaoOr);
/* ! */
const expressaoNot = !false; // Se for false, ele vira true
console.log(expressaoNot);