/**
 * Module dependencies
 */
const express = require ( 'express' );
const Router = express.Router();

/**
 * Internal module dependencies
 */
const {signup, login, join_citclub} = require ( './auth/auth');
const {dashboard} = require ( './pages/pages');
const {verifyToken} = require ( './util/util');
const { fieldsOfInterest } = require ( './serves/serves');



const  uploadController  = require ( './resources/resources');

/**
 * Routes
 */
Router.post ( '/auth/signup', signup );
Router.post ( '/auth/login', login );
Router.post ( '/auth/member', join_citclub);
Router.get ( '/pages/dashboard', verifyToken, dashboard );
Router.get ( '/helpers/interest', fieldsOfInterest);





// ROUTES FRO RESOURCES;

Router.post("/upload", verifyToken, uploadController.uploadFiles);
Router.get("/files", uploadController.getAllFiles);
Router.get("/files/:name", uploadController.downloadFile);




/**
 * Export routes
 */
module.exports = Router;
