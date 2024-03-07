const symbols = ',.;~^[]{}!@#$%*()_+=-';
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genCapitalization = () => String.fromCharCode(rand(65, 91));
const genLowerCase = () => String.fromCharCode(rand(97, 123));
const genNumber = () => String.fromCharCode(rand(48, 58));
const genSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qnt, cap, low, num, sym) {
    const passwordArray = [];
    qnt = Number(qnt);

    for(let i = 0; i < qnt; i++) {
        cap && passwordArray.push(genCapitalization());
        low && passwordArray.push(genLowerCase());
        num && passwordArray.push(genNumber());
        sym && passwordArray.push(genSymbol());
    }

    return passwordArray.join('').slice(0, qnt);
}