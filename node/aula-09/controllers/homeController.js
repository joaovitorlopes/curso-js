exports.initialPage = (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Client Name: <input type="text" name="name"><br>
    Client lastName: <input type="text" name="lastName">
    <button>Submit</button>
    </form>
    `);
}

exports.postHandling = (request, response) => {
    response.send(`I'm your new POST route.`);
}