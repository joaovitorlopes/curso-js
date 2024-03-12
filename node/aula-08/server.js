const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); //Handling POST method

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Client Name: <input type="text" name="name">
    <button>Submit</button>
    </form>
    `);
});

app.get('/test/:idUsers?/:parameter?', (request, response) => {
    console.log(request.params);
    // /test/123 -> params
    console.log(request.query);
    // /test/?name=Joao&lastName=Lopes&age=22 -> query
    response.send(request.query.name);
});

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(`This is what you sent me: ${request.body.name}`);
});

app.listen(5000, () => {
    console.log('The server has been started in the port 5000');
    console.log('Acess http://localhost:5000 or http://127.0.0.1:5000');
});