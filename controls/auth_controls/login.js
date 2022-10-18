/**
 * Application module dependencies
 */
const bcrypt = require ( 'bcrypt' );
const JWT = require ( 'jsonwebtoken');
/**
 * Module internal dependencies
 */
const { CitclubMember, CitclubAccount} = require ( '../../database/index');
const config = require ( '../../config/index');
const token = require ( '../utility/generateToken');
/**
 * Login middleware
 */
const login = (req, res, next) => {
    const {email, username, password} = req.body;
    if (email) {
        CitclubAccount.findOne({ email: email })
        .then ( (user) => {
            bcrypt.compare (password, user.password)
            .then ( (result) => {
                if (result) {
                    //create a new token:
                    const newToken = token (user);
                    res
                    .status (201)
                    .header ({
                        'Content-Type': 'application/json',
                        'auth-token': 'Bearer ' +newToken,
                    })
                    .json ({
                        id: user._id,
                        email: user.email,
                        username: user.username,
                        date_joined: user.date,
                        token: newToken,
                    });
                }else {
                    res
                    .status (403)
                    .json ( {
                        error: "Incorrect password"
                    });
                }
            })
            .catch ( (err) => {
                err.message = "No password provided"
                res
                .status (500)
                .json ({
                    error: err.message 
                });
            });
        })
        .catch ( (err) => {
            err.message = "Email not found"
            res
            .status (500)
            .json ( {
                error: err.message
            });
        } );
    }else {
        CitclubAccount.findOne({ username: username })
        .then ( (user) => {
            bcrypt.compare (password, user.password)
            .then ( (result) => {
                if (result) {
                    const newToken = token (user);
                    res
                    .status (201)
                    .header ({
                        'Content-Type': 'application/json',
                        'auth-token': 'Bearer ' +newToken,
                    })
                    .json ({
                        id: user._id,
                        email: user.email,
                        username: user.username,
                        date_joined: user.date,
                        token: newToken,
                    });
                }else {
                    res
                    .status (403)
                    .json ( {
                        error: "Incorrect password"
                    });
                }
            })
            .catch ( (err) => {
                err.message = "No password provided"
                res
                .status (500)
                .json ({
                    error: err.message 
                });
            });
        })
        .catch ( (err) => {
            err.message = "Username not found"
            res
            .status (500)
            .json ( {
                error: err.message
            });
        } );
    }
    //console.log (email, username, password);
};

/**
 * Exporting login middleware
 */
module.exports = login;