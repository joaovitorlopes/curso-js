const Dog = require('./Z/mod2');
// const Dog = require('./Z/mod2.js'); pode colocar ou não extensão

const d1 = new Dog('Zeus');
console.log(d1);
d1.bark();



// caminhos
const path = require('path');
console.log(path.resolve(__dirname, '..', '..'));
console.log(__filename); // caminho do arquivo
console.log(__dirname); // caminho da pasta