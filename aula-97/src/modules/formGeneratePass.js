import generatePassword from "./generators";

const generatedPassword = document.querySelector('.generated-password');
const quantityCharacters = document.querySelector('.num-characters');
const chkCapitalization = document.querySelector('.chk-cap');
const chkLowerCase = document.querySelector('.chk-lwc');
const chkNumbers = document.querySelector('.chk-num');
const chkSymbols = document.querySelector('.chk-sym');
const btnGenerate = document.querySelector('.generate-pass');

export default () => {
    btnGenerate.addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    });
};

function generate() {
    const password = generatePassword(
        quantityCharacters.value,
        chkCapitalization.checked,
        chkLowerCase.checked,
        chkNumbers.checked,
        chkSymbols.checked,
        );

        return password || 'Please select an option';
}