exports.middlewareGlobal = (request, response, next) => {
    response.locals.localVariable = 'This the value of local variable.';
    next();
}

exports.otherMiddleware = (request, response, next) => {
    console.log('Other middleware');
    next();
}