/**
 * Module dependencies
 */
const express = require ( 'express' );
const {body} = require ( 'express-validator');
const Router = express.Router();

/**
 * Internal module dependencies
 */
const {signup, login, join_citclub} = require ( './auth/auth');
const {dashboard} = require ( './pages/pages');
const {verifyToken} = require ( './util/util');
const { fieldsOfInterest } = require ( './serves/serves');

/**
 * Routes 
 */
Router.post ( '/auth/signup', signup );
Router.post ( '/auth/login', login );
Router.post ( '/auth/member',[
                            //Email validation 
                            body ('email')
                            .isEmail ()
                            .trim ()
                            .normalizeEmail ().toLowerCase ()
                            .isEmpty ()
                            .escape ()
                            .withMessage ('Invalid email address provided ')

                            //Validating  first name and last name
                            .body (`fname`)
                            .isAlpha ()
                            .trim ()
                            .isEmpty ()
                            .escape ()
                            .isUppercase ().toLowerCase ()
                            .withMessage ('Invalid first name provided ')

                            .body (`lname`)
                            .isAlpha ()
                            .trim ()
                            .isEmpty ()
                            .escape ()
                            .isUppercase ().toLowerCase ()
                            .withMessage ('Invalid last name provided ')

                            //Validating phone number
                            .body (`phone`)
                            .trim ()
                            .isEmpty ()
                            .isMobilePhone ('any')
                            .escape ()
                            .withMessage ('Invalid first name and phone number provided')

                            //Validating course
                            .body (`course`)
                            .trim ()
                            .isEmpty ()
                            .escape ()
                            .withMessage ( 'Invalid course abbreviation provided')

                            //Validating rating
                            .body (`rating`)
                            .trim ()
                            .isEmpty ()
                            .escape ()
                            .withMessage ('Invalid rating provided')

                            //Validating designRating
                            .body (`designRating`)
                            .trim ()
                            .isEmpty ()
                            .escape ()
                            . withMessage ('Invalid design rating provided')

                            //Validating interest
                            .body (`interest`)
                            .trim ()
                            .isEmpty ()
                            .escape ()
                            .withMessage ('Invalid interest provided')

                            //Validating password
                            .body (`password`)
                            .trim ()
                            .isEmpty ()
                            .isStrongPassword ()
                            .withMessage ('Invalid password provided')

                            //Validating other information
                            .body (`other`).trim ().escape ().withMessage ('Danerous input')

                        ], join_citclub);
Router.get ( '/pages/dashboard', verifyToken, dashboard );
Router.get ( '/helpers/interest', fieldsOfInterest);
/**
 * Export routes
 */
module.exports = Router;