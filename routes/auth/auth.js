/**
 * Application module dependencies
 */

/**
 * Interal dependencies
 */
const signup = require ( '../../controls/auth_controls/sign_up');
const login = require ( '../../controls/auth_controls/login');
const joincitclub = require ( '../../controls/auth_controls/join_citclub');
const validator = require ( '../../controls/utility/validator');

// Path: routes\auth.js
const auth = {
    signup: signup,
    login: login,
    join_citclub: joincitclub,
    validator: validator,
}



//Export routes
module.exports = auth;