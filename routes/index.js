/**
 * Module dependencies
 */
const express = require ( 'express' );
const Router = express.Router();

/**
 * Internal module dependencies
 */
const signUpPage = require ( '../controllers/sign_up');
const loginPage = require ( '../controllers/login');


/**
 * Routes 
 */
Router.post ( '/signup', signUpPage);
Router.post ( '/login', loginPage);



/**
 * Export routes
 */
module.exports = Router;