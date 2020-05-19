const _ = require('lodash');

const frontendConfig = require('./config/frontend');
const backendConfig = require('./config/backend');

let defaultConfig = {
    mode: process.env.NODE_ENV,
};

if (process.env.CONFIG_ENV === 'frontend') {
    defaultConfig = _.merge(defaultConfig, frontendConfig);
} else if (process.env.CONFIG_ENV === 'backend') {
    defaultConfig = _.merge(defaultConfig, backendConfig);
}

module.exports = defaultConfig;
