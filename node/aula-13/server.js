const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); //Handling POST method

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Our own middleware
app.use(middlewareGlobal);
app.use(routes);


app.listen(5000, () => {
    console.log('The server has been started in the port 5000');
    console.log('Acess http://localhost:5000 or http://127.0.0.1:5000');
});