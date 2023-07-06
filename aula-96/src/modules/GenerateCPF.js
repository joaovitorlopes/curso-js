import ValidateCPF from "./validateCPF";

export default class GenerateCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    format(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    generateNewCPF() {
        const cpfWithoutDigit = this.rand();
        const digit1 = ValidateCPF.generateDigits(cpfWithoutDigit);
        const digit2 = ValidateCPF.generateDigits(cpfWithoutDigit + digit1);
        const newCPF = cpfWithoutDigit + digit1 + digit2;
        return this.format(newCPF);
    }
}