/**
 * Application module dependencies
 */
const bcrypt = require ( 'bcrypt' );
/**
 * Module internal dependencies
 */
const { CitclubMember, CitclubAccount} = require ( '../../database/index');
const token = require ( '../utility/generateToken');
/**
 * Login middleware
 */
const login = (req, res, next) => {
    const {email, password} = req.body;
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
            CitclubAccount.findOne ({username: email})
            .then ( (user) => {
                         bcrypt.compare (password, user.password)
                         .then ( (result) => {
                             if (result) {
                                //  create a new token:
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
                             err.message = "No password provided";
                             res
                             .status (500)
                             .json ({
                                 error: err.message 
                             });
                         });
                     })
                     .catch ( (err) => {
                        CitclubMember.findOne ( { email: email } )
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
            err.message = `User with this email or username: '${email}' was not found`;
            res
            .status (500)
            .json ({
                error: err.message
            });
        });
                     } );
        } );
};

/**
 * Exporting login middleware
 */
module.exports = login;