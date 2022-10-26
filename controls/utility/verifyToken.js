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
    const token = req.header ('Authorization');
    if (!token) {
        return (
            res
            .status (401)
            .json ( {
                message: 'Access Denied!',
            })
        );
    };
    try {
        const authToken = token.slice (7, token.length);
        const verified = JWT.verify (authToken, config.TOKEN_SECRET, {
            algorithms: ['HS512'],
        });
        req.user = verified;
        next ();
    } catch (error) {
        res
        .status (401)
        .json ( {
            message: 'Invalid token',

        });
    }
};

//Export verify function
module.exports = verify;