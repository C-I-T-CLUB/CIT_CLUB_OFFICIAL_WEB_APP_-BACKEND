/**
 * application Dependencies
 */
const express = require ( 'express');
const compression = require ('compression');
const helmet = require ( 'helmet');
const cors = require ( 'cors');


/**
 * Internal Application dependencies
 */
const apiRoutes = require ( './routes/index');
const config = require ( './config/index');
const dbconnection = require ( './helpers/dbconnection');




/**
 * Application instance
 */
const app = express();


/**
 * Application configuration
 */

app.use ( express.json ());
app.use ( express.urlencoded ( {extended: true} ));
app.use ( helmet ());
app.use ( compression ())
app.use ( cors ())



/**
 * Application middlewares
 */
app.use ('/api', apiRoutes)


/**
 * Launching the application
 */
app.listen ( config.PORT, () => {
    console.log ( `Application server started and listening on http://localhost:${config.PORT}`);
});
