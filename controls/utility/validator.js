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
            validate: [validator.isEmail (), "This is not a valid email address"],
            trim: [validator.trim ()],
            escape: [validator.escape ()],
        },
        [req.body.fname]: {
            trim: [validator.trim ()],
            escape: [validator.escape ()],
        },
        [req.body.lname]: {
            trim: [validator.trim ()],
            escape: [validator.escape ()],
        },
        [req.body.phone]: {
            trim: [validator.trim ()],
            escape: [validator.escape ()],
            mobilenumber: [validator.isMobilePhone (), "Please enter avalid phonenumber"]
        },
        [req.body.course]: {
            trim: [validator.trim ()],
            escape: [validator.escape ()],
        },
    }
};
//Export validation function
module.exports = validate;