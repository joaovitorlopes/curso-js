const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const textoDiv = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textoDiv.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}.</p>
<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>
<p>É NaN? ${Number.isNaN(numero)}</p>
<p>Arredondado pra baixo: ${Math.floor(numero)}</p>
<p>Arredondado para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;