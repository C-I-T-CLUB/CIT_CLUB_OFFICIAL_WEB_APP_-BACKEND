/**
 * Validation utility function:
 */
/**
 *  Application module dependencies
 */
const validator = require ( 'validator' );
const { body, validationResult} = require ( 'express-validator');

//Validation function
const validate = (req, res, next) => {
    //Validating email address
    body ( 'email')
    .isEmail ()
    .normalizeEmail ().toLowerCase ()
    .trim ()
    .isEmpty ()
    .escape ()
    .withMessage ('Invalid email address provided ');

   //Validating  first name and last name
   body ('fname')
   .isAlpha ()
   .trim ()
   .isEmpty ()
   .escape ()
   .isUppercase ().toLowerCase ()
   .withMessage ('Invalid first name provided ');

   body ('lname')
   .isAlpha ()
   .trim ()
   .isEmpty ()
   .escape ()
   .isUppercase ().toLowerCase ()
   .withMessage ('Invalid last name provided ');

   //Validating phone number
   body ('phone')
   .trim ()
   .isEmpty ()
   .isMobilePhone ('any')
   .escape ()
   .withMessage ('Invalid first name and phone number provided');

        
};
//Export validation function
module.exports = validate;