// Escreva uma função chamda ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => altura < largura ? true : false;
console.log(ePaisagem(1920, 1080));