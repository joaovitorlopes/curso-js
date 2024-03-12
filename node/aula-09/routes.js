const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

// Home routes
route.get('/', homeController.initialPage);
route.post('/', homeController.postHandling);

// Contact routes
route.get('/contact', contactController.initialPage);
module.exports = route;
 