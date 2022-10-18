/**
 * Application module dependencies
 */
const mongoose = require ( 'mongoose');

/**
 * Module internal dependencies
 */
const {CitClubMember, FieldOfInterest} = require ('../schemas/citclubMembershipSchema'); 

/**
 * CIT CLUB MEMBER MODEL
 * FELD OF INTEREST MODEL
 * collection {table} name: citclub members, fields of interest,
 */
const CitclubMemberModel = mongoose.model ( 'citclub members', CitClubMember);
const FieldOfInterestModel = mongoose.model ( 'fieldsOfInterest', FieldOfInterest);
/**
 * Exporting CIT CLUB MEMBER MODEL and FELD OF INTEREST MODEL
 * with citclub members collection fields of interest collection
 */
module.exports = {CitclubMemberModel, FieldOfInterestModel}; 