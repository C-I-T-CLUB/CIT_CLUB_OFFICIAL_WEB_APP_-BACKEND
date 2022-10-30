/**
 * 
 * Export blogs modules
 */

const {getBlog,getBlogs,saveBlog,upVoteBlog} = require ('../../controls/blogs/blogs')

const blogs= {
    getBlog,
    saveBlog,
    getBlogs,
    upVoteBlog
}
module.exports=blogs