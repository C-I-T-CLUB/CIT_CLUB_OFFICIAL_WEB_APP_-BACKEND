/**
 * Application module dependencies
 */
const mongoose = require ('mongoose');
const {isEmail} = require ('validator');

/**
 * module internal dependencies
 */

// cit club membership account schema
const Schema = mongoose.Schema;
const FieldOfInterest = new Schema ( {name: String});
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
        minLength: 6,
        maxLength: 30,
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 12,
        unique: true,
    },
    course: {
        type: String,
        minLength: 2,
        maxLength: 6,
        required: true,
        trim: true,
    },
    programingRating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        trim: true
    },
    designRating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        trim: true
    },
    fieldOfInterest : {
        type: [String],
        default: undefined,
        required: true,
        trim: true,
        min: null,
        max: null,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 2024,
    },
    additionalInfo: {
        type: String,
        required: false,
        trim: true,
        minLength: null,
        maxLength: 300
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Exporting CIT CLUB MEMBER SCHEMA
module.exports = {CitClubMember, FieldOfInterest};