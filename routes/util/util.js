/**
 * Application module dependencies
 */

/**
 * Internal module dependencies
 */
const validator = require("../../controls/utility/validator");
const developerValidator = require("../../controls/utility/developer");
const verify = require("../../controls/utility/verifyToken");

//utility object:
const utils = {
  verifyToken: verify,
  developerValidator,
  validator,
};

//Exportin utility object:
module.exports = utils;
