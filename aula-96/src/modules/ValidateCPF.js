export default class ValidateCPF {
    constructor(sentCPF) {
        Object.defineProperty(this, 'clearCPF', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: sentCPF.replace(/\D+/g, '')
        });
    }

    hasSequence() {
        return this.clearCPF.charAt(0).repeat(this.clearCPF.length) === this.clearCPF;
    }

    generateNewCPF() {
        const cpfNoDigits = this.clearCPF.slice(0, -2);
        const digit1 = ValidateCPF.generateDigits(cpfNoDigits);
        const digit2 = ValidateCPF.generateDigits(cpfNoDigits + digit1);
        this.novoCPF = cpfNoDigits + digit1 + digit2;
    }

    static generateDigits(cpfNoDigits) {
        let total = 0;
        let reverso = cpfNoDigits.length + 1;

        for(let numericString of cpfNoDigits) {
            total += reverso * Number(numericString);
            reverso--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    validate() {
        if(!this.clearCPF) return false;
        if(typeof this.clearCPF !== 'string') return false;
        if(this.clearCPF.length !== 11) return false;
        if(this.hasSequence()) return false;
        this.generateNewCPF();
        return this.novoCPF === this.clearCPF;
    }
}