const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); //Handling POST method
app.use(routes);


app.listen(5000, () => {
    console.log('The server has been started in the port 5000');
    console.log('Acess http://localhost:5000 or http://127.0.0.1:5000');
});