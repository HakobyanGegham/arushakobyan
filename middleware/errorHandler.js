function errorHandler(message, code, res) {
    res.status(code);
    return res.json(message);
}

module.exports = errorHandler;