/**
 * Module dependencies
 */
const express = require ( 'express' );
const Router = express.Router();

/**
 * Internal module dependencies
 */
const {signup, login, join_citclub, validator} = require ( './auth/auth');


/**
 * Routes 
 */
Router.post ( '/auth/signup', signup );
Router.post ( '/auth/login', login );
Router.post ( '/auth/member', join_citclub);
/**
 * Export routes
 */
module.exports = Router;