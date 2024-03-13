exports.initialPage = (request, response) => {
    response.render('index');
    return;
}

exports.postHandling = (request, response) => {
    response.send(request.body);
    return;
}