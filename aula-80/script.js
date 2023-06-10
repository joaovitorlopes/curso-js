// Objeto Map() ou Estutura de Dados Map;
const pessoas = [
    { id: 3, nome: 'Joao' },
    { id: 2, nome: 'Karla' },
    { id: 1, nome: 'Fulano' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas) {
    console.log(pessoas);
}
// console.log(novasPessoas);
// console.log(novasPessoas.get(2));