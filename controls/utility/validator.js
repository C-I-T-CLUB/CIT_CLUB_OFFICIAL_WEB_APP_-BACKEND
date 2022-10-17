/**
 * Validation utility function:
 */
/**
 *  Application module dependencies
 */
const { body} = require ( 'express-validator');

//Validation function
const validate = (req, res, next) => {
    //Validating email address
    body ( `email`)
    .isEmail ()
    .normalizeEmail ().toLowerCase ()
    .trim ()
    .isEmpty ()
    .escape ()
    .withMessage ('Invalid email address provided ');

   //Validating  first name and last name
   body (`fname`)
   .isAlpha ()
   .trim ()
   .isEmpty ()
   .escape ()
   .isUppercase ().toLowerCase ()
   .withMessage ('Invalid first name provided ');

   body (`${req.body.lname}`)
   .isAlpha ()
   .trim ()
   .isEmpty ()
   .escape ()
   .isUppercase ().toLowerCase ()
   .withMessage ('Invalid last name provided ');

   //Validating phone number
   body (`phone`)
   .trim ()
   .isEmpty ()
   .isMobilePhone ('any')
   .escape ()
   .withMessage ('Invalid first name and phone number provided');

   //Validating course
   body (`course`)
   .trim ()
   .isEmpty ()
   .escape ()
   .withMessage ( 'Invalid course abbreviation provided');

   //Validating rating
   body (`rating`)
   .trim ()
   .isEmpty ()
   .escape ()
   .withMessage ('Invalid rating provided');

   //Validating designRating
   body (`designRating`)
   .trim ()
   .isEmpty ()
   .escape ()
   . withMessage ('Invalid design rating provided');

   //Validating interest
   body (`interest`)
   .trim ()
   .isEmpty ()
   .escape ()
   .withMessage ('Invalid interest provided');

   //Validating password
   body (`password`)
   .trim ()
   .isEmpty ()
   .isStrongPassword ()
   .withMessage ('Invalid password provided');

   //Validating other information
   body (`other`).trim ().escape ().withMessage ('Danerous input'); 

};
//Export validation function
module.exports = validate;