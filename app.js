/**
 * application Dependencies
 */
const express = require ( 'express');
const path = require ( 'path');


/**
 * Internal Application dependencies
 */
const apiRoutes = require ( './routes/index');
const config = require ( './config/index');
const databse = require ( './database/index');

/**
 * Application instance
 */
const app = express();


/**
 * Application configuration
 */
app.use ( express.json ());
app.use ( express.urlencoded ( {extended: true} ));
app.use ( express.static ( path.join (__dirname, 'public') ));



/**
 * Application middlewares
 */
app.use ('/', apiRoutes)



/**
 * Launching the application
 */
app.listen ( config.PORT, () => {
    console.log ( `Application server started and listening on http://localhost:${config.PORT}`);
});