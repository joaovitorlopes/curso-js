const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p'); // seleciona todas as tags p dentro da div (NodeList)

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}