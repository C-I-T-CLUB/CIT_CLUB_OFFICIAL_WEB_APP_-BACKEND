const { default: mongoose } = require("mongoose");
const BlogSchema = require("../schemas/BlogsSchema");



const BlogsModel = mongoose.model('blogs',BlogSchema)

module.exports = BlogsModel