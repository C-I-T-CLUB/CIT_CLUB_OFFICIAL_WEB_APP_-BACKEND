/**
 * Application module dependencies
 */
const JWT = require ( 'jsonwebtoken');

/**
 * Internal module dependencies
 * @param {*} user 
 */
const config = require ( '../../config/index');
const tokenGenerator = (user) => {
    const newToken = JWT.sign ( {
        id: user._id,
        email: user.email,
        date_joined: user.date,
    },
    config.TOKEN_SECRET,
    {
        algorithm: 'HS256',
        expiresIn: '3600s'
    }
    )
    return newToken;
};

//Export the token generator
module.exports = tokenGenerator;