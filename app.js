const config = require("./config/configs");
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);
const port = config.server.port;
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
