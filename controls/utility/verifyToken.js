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
    if (!token) {
        res
        .status (401)
        .json ( {
            message: 'Access Denied!',
        })
    };
    console.log ( token );
    next (token);
};

//Export verify function
module.exports = verify;