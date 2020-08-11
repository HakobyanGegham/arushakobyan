const config = require("./config/configs");
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const token = require('crypto').randomBytes(64).toString('hex');
console.log(token);
app.use('/admin', adminRoutes);

const port = config.server.port;
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});