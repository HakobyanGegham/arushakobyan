function errorHandler(message, code, res) {
    res.status(code);
    res.json(message);
    res.end();
}

module.exports = errorHandler;