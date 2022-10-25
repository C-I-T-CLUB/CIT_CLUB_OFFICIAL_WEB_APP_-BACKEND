/**
 * Application module dependencies
 */
const mongoose = require ( 'mongoose' );


/**
 * Internal module dependencies
 */


const Schema = mongoose.Schema;
const EventSchema = new Schema ( {
    title: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50
    },
    shortDescription: {
        type: String,
        minLength: 100,
        maxLength: 255,
        required: true
    },
    eventType: {
        type: String,
        maxLength: 100,
        required: true,
    },

});

//Export Schema
module.exports = EventSchema;