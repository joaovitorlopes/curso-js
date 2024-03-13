require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('ready');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); //Handling POST method

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: '9iN5lUz1Ewr7eSiXP1vxVw6MkiEvab7DJKg1w6ArKylgAEPHuf',
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Our own middleware
app.use(middlewareGlobal);
app.use(routes);

app.on('ready', () => {
    app.listen(5000, () => {
        console.log('The server has been started in the port 5000');
        console.log('Acess http://localhost:5000 or http://127.0.0.1:5000');
    });
});