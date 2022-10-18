/**
 * Application module dependencies
 */

/**
 * Internal module dependencies
 */
const { FieldOfInterest } = require ( '../../database/index');

//Field of interest module:
const fieldsOfInterest = (req, res, next ) => {
    FieldOfInterest.find ( {})
    .then ( (specializations) => {
        res
        .status (200)
        .json ( {
            specializations: specializations,
        });
    })
    .catch ( (err) => {
        err.message = `We encountered an error when trying to find field of interest`;
        res
        .status (500)
        .json ( {
            error: err.message,
         });
    });
};

//Exporting module
module.exports = fieldsOfInterest;