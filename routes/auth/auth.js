/**
 * Application module dependencies
 */

/**
 * Interal dependencies
 */
const signup = require ( '../../controllers/sign_up');
const login = require ( '../../controllers/login');
const joincitclub = require ( '../../controllers/join_citclub');

// Path: routes\auth.js
const auth = {
    signup: signup,
    login: login,
    join_citclub: joincitclub
}



//Export routes
module.exports = auth;