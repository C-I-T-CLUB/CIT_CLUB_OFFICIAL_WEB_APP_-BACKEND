/**
 * Validation utility function:
 */
/**
 *  Application module dependencies
 */
const { body } = require("express-validator");

//Validation function
const validate = (req, res, next) => {
  //Validating email address
  return [
    body(`workPrefference`)
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid work prefference provided "),

    body(`fromLocation`)
      .trim()
      .isEmpty()
      .escape()
      .isUppercase()
      .toLowerCase()
      .withMessage("Invalid  location provided"),

    //Validating phone number
    body(`techStack`)
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid tech stack provided"),

    //Validating course
    body(`githubProfile`)
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid github profile provided"),

    //Validating rating
    body(`linkedInProfile`)
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid linkedin profile provided"),
  ];
};

//Export validation function
module.exports = validate;
