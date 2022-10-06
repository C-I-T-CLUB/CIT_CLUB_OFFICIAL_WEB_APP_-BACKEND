/**
 * IMPORTING AND EXPORTING APPLICATION CONFIGURATION
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require ( './prod_config');
}else {
    module.exports = require ( './dev_config');
}