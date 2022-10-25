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

 mongoose.connection.on ( 'connected', () => {
        console.log ( 'Mongoose connected to the database');
 });

 mongoose.connection.on ( 'error', (err) => {
        console.log ( err.message );
 });

 mongoose.connection.on ( 'disconnected', () => {
        console.log ( 'Mongoose disconnected from the database');
 } );

 process.on ( 'SIGINT', () => {
        mongoose.connection.close ( () => {
            console.log ( 'Mongoose disconnected from the database due to application termination');
            process.exit (0);
        });
 } );
 /**
  * Exporting database connection
  */
