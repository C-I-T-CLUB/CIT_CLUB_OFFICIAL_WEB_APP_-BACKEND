const {  mongoose, } = require("mongoose");

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 20
    },
    shortDescription: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    createdat: {
        type: Date,
        default: Date.now
    },
    imageLink: {
        type: String,
        required: true,
    },
    tags: {
        type: [String]
    },
    author:{
        type: String,
        required: true
    },
    upVotes: {
        type: Number
    }
})
module.exports = BlogSchema