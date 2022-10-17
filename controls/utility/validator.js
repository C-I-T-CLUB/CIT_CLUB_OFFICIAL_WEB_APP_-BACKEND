/**
 * Validation utility function:
 */
/**
 *  Application module dependencies
 */
const validator = require ( 'validator' );

//Validation function
const validate = (req, res, next) => {
    const schema = {
        [req.body.email]: {
            validate: [validator.isEmail (req.body.email), "This is not a valid email address"],
            escape: [validator.escape (req.body.email)],
        },
        [req.body.fname]: {
            escape: [validator.escape (req.body.fname)],
        },
        [req.body.lname]: {
            escape: [validator.escape (req.body.lname)],
        },
        [req.body.phone]: {
            escape: [validator.escape (req.body.phone)],
            mobilenumber: [validator.isMobilePhone (req.body.phone, 'any'), "Please enter avalid phonenumber"]
        },
        [req.body.course]: {
            escape: [validator.escape (req.body.course)],
        },
        [req.body.rating]: {
            escape: [validator.escape (req.body.rating)],
        },
        [req.body.designRating]: {
            escape: [validator.escape (req.body.designRating)],
        },
        [req.body.interest]: {
            escape: [validator.escape (req.body.interest)],
        },
        [req.body.password]: {
            escape: [validator.escape (req.body.password)],
            /**
             * const strongPassword = { minLength: 8, 
             * minLowercase: 1, 
             * minUppercase: 1, 
             * minNumbers: 1, 
             * minSymbols: 1, 
             * returnScore: false, 
             * pointsPerUnique: 1, 
             * pointsPerRepeat: 0.5, 
             * pointsForContainingLower: 10, 
             * pointsForContainingUpper: 10, 
             * pointsForContainingNumber: 10, 
             * pointsForContainingSymbol: 10 }
             */
            strongpassword: [validator.isStrongPassword (req.body.password)],
        },
        [req.body.other]: {
            escape: [validator.escape (req.body.other)],
        },
    }
    res
    .status (500)
    .json ({
        error: schema
    });
    next ();
};
//Export validation function
module.exports = validate;