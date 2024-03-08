class Person {
    constructor(name) {
        this.name = name;
    }
}

const name = 'Joao';
const lastName = 'Lopes';

exports.name = name;
module.exports.lastName = lastName;
exports.otherThing = 'AnyThing';