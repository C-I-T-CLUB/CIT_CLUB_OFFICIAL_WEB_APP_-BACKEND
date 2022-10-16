/**
 * Application module dependencies
 */
const mongoose = require ( 'mongoose');

/**
 * Module internal dependencies
 */
const CitclubMember = require ( '../schemas/citclubMembershipAccountSchema'); 

/**
 * CIT CLUB MEMBER MODEL
 * collection {table} name: citclub members
 */
const CitclubMemberModel = mongoose.model ( 'citclub members', CitclubMember);

/**
 * Exporting CIT CLUB MEMBER MODEL
 * with citclub members collection
 */
module.exports = CitclubMemberModel; 