/**
 * Application module dependencies
 */
const mongoose = require ('monggose');
const {isEmail} = require ('validator');

/**
 * module internal dependencies
 */

// cit club membership account schema
const Schema = mongoose.Schema;
const CitClubMember = new Schema ( {
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [ isEmail],
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        min: 8,
        max: 30,
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 12,
        unique: true,
    },
    course: {
        type: String,
        min: 2,
        max: 6,
        required: true,
        trim: true,
    },
    programingRating: {
        type: Number,
        required: true,
        min: 1,
        max: 2,
        trim: true
    },
    designRating: {
        type: Number,
        required: true,
        min: 1,
        max: 2,
        trim: true
    },
    fieldOfInterest : {
        type: String,
        required: true,
        trim: true,
        min: null,
        max: null,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8,
        max: 20,
    },
    additionalInfo: {
        type: String,
        required: false,
        trim: true,
        min: null,
        max: 300
    },
});

//Exporting CIT CLUB MEMBER SCHEMA
module.exports = CitClubMember;