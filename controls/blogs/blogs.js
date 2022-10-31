/**
 * Blogs queries
 */

const { BlogsModel: Blog } = require("../../database");
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * Saves a blog to the database
 */
const saveBlog = (request, response, next) => {
  const { title, content, author, imageLink, tags, shortDescription } =
    request.body;
  const blog = new Blog({
    author,
    title,
    tags,
    imageLink,
    content,
    shortDescription,
    upVotes: 0,
  });
  blog
    .save()
    .then((data) => {
      response.status(201).json({
        message: "Blog Created Successfuly",
        id: data.id,
      });
    })
    .catch((err) => {
      response.status(500).json({
        error: err?.message ?? "Failed!. Please try again",
      });
    });
};
/**
 * 
 * @param {*} request 
 * @param {*} respone 
 * Get all blogs in the dabase using pagination in pages of 20 documents per page
 */
const getBlogs = async (request, respone) => {
  let page = request?.params.page;
  if (page) {
    page = Number(page)*20
  }else{
    page = 0;
  }
  const blogs = await Blog.find().skip(page).limit(20).exec();
  respone.status(200).json({
    blogs,
  });
};
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * Get a single blog by the blog id
 */
const getBlog = async(request, response) => {
    const id = request?.params?.id
    
    if (id){
        const blog = await Blog.findById(id).exec()
        
        response.status(200).json({
            blog: blog
        })
    }else {
        response.status(500).json({message: "Error Please Provide Blog Id"})
    }
};
/**
 * Upvotes a single blog
 */
const upVoteBlog = (request, response) => {
    const id = request.params?.id
    if (id){
        Blog.findOneAndUpdate({_id: id},{
            $inc: {
                'upVotes': 1
            }
        }).exec()
        response.status(200).json({
            message: 'Success'
        })
    }else {
        response.status(500).json({message: "Error Please Provide Blog Id"})
    }
};
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * Fetches external blogs from news api
 */
const externalBlogs = (request,response) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://newsapi.org/v2/everything?apiKey=74f1ebd4692f4f3d8adb0e4674dd1ae7&q=programming", requestOptions)
        .then(resp => resp.json())
        .then(result => {
            const data = result.articles.map(({author,title,description,urlToImage,content,publishedAt})=>({
                title,
                author,
                content,
                shortDescription: description,
                imageLink: urlToImage,
                createdat: publishedAt
            }))
            response.status(200).json({
                blogs: data
            })
        })
        .catch(error => response.status(500).json({message: error?.message ?? "Failed! Please Try Again"}));
}

module.exports = {
  saveBlog,
  getBlog,
  getBlogs,
  upVoteBlog,
  externalBlogs
};
