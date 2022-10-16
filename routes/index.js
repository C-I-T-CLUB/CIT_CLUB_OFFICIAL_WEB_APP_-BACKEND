/**
 * Module dependencies
 */
const express = require ( 'express' );
const Router = express.Router();

/**
 * Internal module dependencies
 */
const {signup, login} = require ( './auth/auth');


/**
 * Routes 
 */
Router.post ( '/auth/signup', signup );
Router.post ( '/auth/login', login );
/**
 * Export routes
 */
module.exports = Router;