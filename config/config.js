'use strict';
const dotenv = require('dotenv');
dotenv.config();

const joi = require('joi');
const envVarsSchema = joi.object({
    NODE_ENV: joi.string()
        .required(),
    DATABASE_NAME: joi.string()
        .required(),
    DATABASE_USER: joi.string()
        .required(),
    DATABASE_HOST: joi.string()
        .required(),
    PORT: joi.number()
        .required(),
    DATABASE_DIALECT: joi.string()
        .required(),
    LOGGER_LEVEL: joi.string()
        .allow('error', 'warn', 'info', 'debug')
        .default('info'),
    LOGGER_ENABLED: joi.boolean()
        .truthy('TRUE')
        .truthy('true')
        .falsy('FALSE')
        .falsy('false')
        .default(true)
}).unknown().required();

const {error, value: envVars} = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}
const config = {
    env: envVars.NODE_ENV,
    isProduction: envVars.NODE_ENV === 'production',
    isDevelopment: envVars.NODE_ENV === 'development',
    logger: {
        level: envVars.LOGGER_LEVEL,
        enabled: envVars.LOGGER_ENABLED
    },
    server: {
      port: envVars.PORT
    },
    database: {
        name: envVars.DATABASE_NAME,
        user: envVars.DATABASE_USER,
        password: envVars.DATABASE_PASSWORD,
        host: envVars.DATABASE_HOST,
        dialect: envVars.DATABASE_DIALECT
    }
};
module.exports = config;