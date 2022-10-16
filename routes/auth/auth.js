/**
 * Application module dependencies
 */

/**
 * Interal dependencies
 */
const signup = require ( '../../controllers/sign_up');
const login = require ( '../../controllers/login');

// Path: routes\auth.js
const auth = {
    signup: signup,
    login: login
}



//Export routes
module.exports = auth;