/**
 * Application module dependencies
 */
const mongoose = require ( 'mongoose' );

/**
 * Module internal dependencies
 */
const config = require ( '../config/index');
/**
 * Data base connection
 */
mongoose.connect (
    config.DB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
.then ( () => {
    console.log ( 'Conneted to the database successfully');
})
.catch ( (err) => {
    console.log ( err.message );
});

/**
 * Exporting database connection
 */
module.exports = mongoose;