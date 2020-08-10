const config = require("./config/config");
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/admin', adminRoutes);

const port = config.server.port;
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});