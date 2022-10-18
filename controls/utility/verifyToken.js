/**
 * Application module dependencies
 */
const JWT = require ( 'jsonwebtoken');

/**
 * Internal module dependencies
 */
const config = require ( '../../config/index');

//Verify function:
const verify = (req, res, next) => {
    const token = req.header ('auth-token');
    console.log ( token );
};

//Export verify function
module.exports = verify;