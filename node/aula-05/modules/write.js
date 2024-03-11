const fs = require('fs').promises;

// fs.writeFile(filePath, 'Frase 1', { flag: 'w', encoding: 'utf8' }); // FLAG 'w' Apaga e sobrescreve o que tem no arquivo
// fs.writeFile(filePath, 'Frase 1', { flag: 'a', encoding: 'utf8' }); // FLAG 'a' Escreve no final do arquivo

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' });
};
