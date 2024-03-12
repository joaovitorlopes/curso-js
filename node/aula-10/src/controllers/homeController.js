exports.initialPage = (request, response) => {
    response.render('index');
}

exports.postHandling = (request, response) => {
    response.send(`I'm your new POST route.`);
}