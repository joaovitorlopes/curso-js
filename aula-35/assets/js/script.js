const elementos = [
    { tag: 'p', texto: 'Frase 1' }, // 0
    { tag: 'div', texto: 'Frase 2' }, // 1
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const page = document.querySelector('.container');
const div = document.createElement('div'); // criar uma div

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

page.appendChild(div);