// MAP - Mapeando o Array
// Retorna um array do mesmo tamanho, mas altera seus valores;

// Dobre os valores desses números:
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumbers = numbers.map(value => value * 2);
console.log(doubleNumbers);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa;
// Remova apenas a chave "nome" do objeto;
// Adicione uma chave id em cada objeto;
const person = [
    { name: 'João', age: 22 },
    { name: 'Karla', age: 21 },
    { name: 'Luiz', age: 19 },
    { name: 'Aminah', age: 19 },
    { name: 'Edmeia', age: 43 },
    { name: 'Claudia', age: 56 },
];

const nameToString = person.map(object => object.name);
console.log(nameToString);
const onlyAge = person.map(object => ({ age: object.age }));
console.log(onlyAge);
const createId = person.map(function(object, index) {
    const newObject = { ...object };
    newObject.id = index;
    return newObject;
});
console.log(createId);