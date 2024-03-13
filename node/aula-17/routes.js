const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');


// Home routes
route.get('/', homeController.initialPage);
route.post('/', homeController.postHandling);

// Contact routes
route.get('/contact', contactController.initialPage);

module.exports = route;
 