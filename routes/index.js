/**
 * Module dependencies
 */
const express = require ( 'express' );
const Router = express.Router();

/**
 * Internal module dependencies
 */
const homePage = require ( '../controllers/home');
const signUpPage = require ( '../controllers/sign_up');
const loginPage = require ( '../controllers/login');


/**
 * Routes 
 */
Router.get ('/', homePage);
Router.post ( '/signup', signUpPage);
Router.post ( '/login', loginPage);



/**
 * Export routes
 */
module.exports = Router;