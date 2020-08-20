const cron = require('node-cron');
const EmailService = require('../services/emailService');

class CronService {
    sendEmails() {
        console.log('Start sending emails');
        cron.schedule('10 * * * * *', EmailService.sendEmails, {});
    }
}

const cronService = new CronService();
module.exports = cronService;