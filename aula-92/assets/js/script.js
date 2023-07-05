// Fetch API and Axios (JSON)
// Axios -> Não retorna uma Promise
// Fetch -> buscar os dados do json;

// Usando fetch:
// fetch('./assets/json/pessoas.json')
//     .then(response => response.json()) // retorna uma nova promise;
//     .then(json => loadElementsInPage(json)); // envia a promise para a função;

// Usando AXIOS:
axios('./assets/json/pessoas.json')
    .then(response => loadElementsInPage(response.data));

function loadElementsInPage(json) {
    const table = document.createElement('table');
    for(let person of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = person.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.appendChild(td);

        table.appendChild(tr); // adiciona linhas na tabela
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}