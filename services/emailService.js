const Email = require('../models/email');
const configs = require('../config/emails');
const nodeMailer = require('nodemailer');

class EmailService {
    transporter;

    async onUserCreated(user) {
        try {
            await Email.create({
                from: configs.email.senderEmail,
                to: configs.email.receiverEmail,
                subject: 'New user',
                text: `New user have been created with email(${user.email}) and phone number(${user.phoneNumber})`
            });
        } catch (error) {
            throw error;
        }
    }

    async sendEmails() {
        try {
            const emails = await Email.findAll({
                where: {isSent: 0}
            });

            emails.forEach(email => {
                console.log(this);
                this.sendEmail(email).then(result => {
                    console.log("Message sent: %s", result.messageId);
                    email.isSent = 1;
                    email.save();
                }).catch(error => {
                    console.log(error);
                });
            })
        } catch (error) {
            throw error;
        }
    }

    async getTransporter() {
        if (this.transporter) {
            return this.transporter;
        }
        const testAccount = await nodeMailer.createTestAccount();

        this.transporter = nodeMailer.createTransport({
            host: "smtp.ethereal.email",
            port: configs.email.smptPort,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        return this.transporter;
    }

    async sendEmail(email) {
        console.log(`Try to send email for email with id(${email.id})`);
        const transporter = await this.getTransporter();
        const {from, to, subject, text} = email;
        return await transporter.sendMail({
            from, to, subject, text,
        });
    }
}

const emailService = new EmailService();
module.exports = emailService;