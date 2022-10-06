/**
 * Application module dependencies
 */
const bcrypt = require ( 'bcrypt' );
/**
 * Module internal dependencies
 */
const CitClubAccount = require ( '../database/models/signUpModel');
/**
 * Login middleware
 */
const login = (req, res, next) => {
    const {email, username, password} = req.body;
    if (email) {
        CitClubAccount.findOne({ email: email })
        .then ( (user) => {
            bcrypt.compare (password, user.password)
            .then ( (result) => {
                if (result) {
                    res
                    .status (201)
                    .json ({
                        id: user._id,
                        email: user.email,
                        username: user.username
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
        CitClubAccount.findOne({ username: username })
        .then ( (user) => {
            bcrypt.compare (password, user.password)
            .then ( (result) => {
                if (result) {
                    res
                    .status (201)
                    .json ({
                        id: user._id,
                        email: user.email,
                        username: user.username
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