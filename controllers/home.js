/**
 * Application module dependencies
 */

// home function
const home = ( req,res) => {
    res.send ( index.html);
};

//Exporting home function
module.exports = home;