// Operação ternária
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'; // Parecido com if e else de forma simplificada;
console.log(nivelUsuario);

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}