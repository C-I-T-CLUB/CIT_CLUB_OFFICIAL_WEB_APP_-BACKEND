/**
 * Application module dependencies
 */

/**
 * Internal module dependencies
 */

//Dashboard module
const dashboard = (req, res ) => {
    const token = req.header ('auth-token').slice ( 7, req.header ('auth-token').length);
    res
    .status (201)
    .json ({
        body: token
    });
};

//Export dashboard module
module.exports =dashboard;