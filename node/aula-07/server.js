const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Client Name: <input type="text" name="name">
    <button>Submit</button>
    </form>
    `);
});

app.post('/', (request, response) => {
    response.send('Form recived!');
});

app.get('/contact', (request, response) => {
    response.send('This is my contact.');
});

app.listen(5000, () => {
    console.log('The server has been started in the port 5000');
    console.log('Acess http://localhost:5000 or http://127.0.0.1:5000');
});