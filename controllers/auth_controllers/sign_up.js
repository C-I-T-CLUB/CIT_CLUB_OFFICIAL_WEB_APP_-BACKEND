/**
 * Application module dependencies
 */
const bcrypt = require ( 'bcrypt' );

/**
 * Applicatio module internal dependencies
 */
const { CitclubAccount: NewAccount}  = require ( '../database/index');
/**
 * Signup middleware
 */
const signUp = (req,res, next) => {
    const {email, username, password} = req.body;
    //Hashing user password using bcrypt promise
    let hashedPassword;
    bcrypt.hash (password, 12)
    .then ( (hashed) => {
        hashedPassword = hashed;

        let newUser = new NewAccount ( {
            email: email, 
            username: username, 
            password: hashedPassword
        });
        newUser
        .save ()
        .then ( (data) => {
            res
            .status (201)
            .json ( {
                message: `User with username ${data.username} has been created successfully`,
                id: data._id
            });
        })
        .catch ( (err) => {
            res
            .status (500)
            .json ( {
                error: err.message
            });
        });
    })
    .catch ( (err) => {
        res
        .status (500)
        .json ({error: err.message});
    });
};

/**
 * export signup middleware
 */
module.exports = signUp;