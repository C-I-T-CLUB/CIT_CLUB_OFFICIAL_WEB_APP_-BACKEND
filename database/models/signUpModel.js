/**
 * Application module dependencies
 */
const mongoose = require ( 'mongoose' );

/**
 * Module internal dependencies
 */
const SignUpSchema = require ( '../schemas/signUpSchema');


/**
 * Ceating sign up model
 * Collection {table} name : citclub accounts
 */
const SignUpModel = mongoose.model ( 'citclub accounts', SignUpSchema);

/**
 * Exporting sign up model with citclu accounts coolection
 */
module.exports = SignUpModel;