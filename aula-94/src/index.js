// Importando o padrão | importando o restante
import qualquerNome, { nome as nome2, sobrenome, idade, Pessoa } from './module1';

const nome = 'Fulano';
console.log(nome)

const p1 = new Pessoa('Fulano', 'Silva');
console.log(p1);

console.log(`${nome2} ${sobrenome}, ${idade} anos`);
console.log(qualquerNome(5, 2));