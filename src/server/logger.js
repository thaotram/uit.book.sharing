'use strict';

const chalk = require('chalk');
import log from './log';

module.exports = function() {
    const object = {};
    const info = (...a) => {
        log('┃', a.join(' - '), '', chalk.cyan);
    };

    object.info = info;
    object.trace = object.debug = object.warn = object.error = () => {};

    return object;
}();