'use strict';
const dotenv = require('dotenv');
dotenv.config();

const joi = require('joi');
const envVarsSchema = joi.object({
    SENDER_EMAIL:joi.string()
        .required(),
    RECEIVER_EMAIL:joi.string()
        .required(),
    SMTP_USER:joi.string()
        .required(),
    SMTP_PASSWORD:joi.string()
        .required(),
    SMTP_HOST:joi.string()
        .required(),
    SMTP_PORT:joi.string()
        .required(),
}).unknown().required();

const {error, value: envVars} = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}
const configs = {
    email: {
        senderEmail: envVars.SENDER_EMAIL,
        receiverEmail: envVars.RECEIVER_EMAIL,
        smtpUser: envVars.SMTP_USER,
        smptPassword: envVars.SMTP_PASSWORD,
        smptHost: envVars.SMTP_HOST,
        smptPort: envVars.SMTP_PORT,
    }
};
module.exports = configs;