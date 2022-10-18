/**
 * Application module dependencies
 */

/**
 * Internal module dependencies
 */

//Dashboard module
const dashboard = (req, res, next ) => {
    res
    .status (201)
    .json ({
        body: req.body
    });
};

//Export dashboard module
module.exports =dashboard;