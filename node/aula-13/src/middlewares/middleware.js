exports.middlewareGlobal = (request, response, next) => {
    next();
}

exports.otherMiddleware = (request, response, next) => {
    console.log('Other middleware');
    next();
}