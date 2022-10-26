/**
 * importing dependencies
 */
const {CitclubMemberModel: CitclubMember, FieldOfInterestModel: FieldOfInterest} = require ('./models/citclubMemberModel');
const CitclubAccount = require ('./models/signUpModel');

// const ResourcesModel = require ('./models/resourcesModel');

/**
 * CIT CLUB MODELS
 */
module.exports = {
    CitclubMember,
    FieldOfInterest,
    CitclubAccount,
    // ResourcesModel
};
