/**
 * Application module dependencies
 */

/**
 * Internal module dependencies
 */
 const validator = require ( '../../controls/utility/validator');
const verify = require ( '../../controls/utility/verifyToken');

//utility object:
const utils = {
    validator: validator,
    verifyToken: verify,
};

//Exportin utility object:
module.exports = utils;