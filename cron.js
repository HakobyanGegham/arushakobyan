const express = require('express');
const config = require("./config/configs");
const app = express();
const CronService = require('./services/cronService');
const port = config.server.cronJobsPort;
CronService.sendEmails();
const server = app.listen(port, () => {
    // console.log('Server listening on port ' + port);
});