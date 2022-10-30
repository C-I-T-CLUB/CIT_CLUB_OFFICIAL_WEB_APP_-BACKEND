/**
 * Module dependencies
 */
const express = require("express");

const { body } = require("express-validator");

const Router = express.Router();

/**
 * Internal module dependencies
 */
const { signup, login, join_citclub } = require("./auth/auth");
const { dashboard } = require("./pages/pages");
const { verifyToken, developerValidator } = require("./util/util");
const { fieldsOfInterest } = require("./serves/serves");
const {getBlogs,saveBlog,getBlog, upVoteBlog} = require('./blogs/index')
const {
  updateUser,
  removeDev,
  findDev,
  addDev,
} = require("../controls/pages/findDeveloper");



const  uploadController  = require ( './resources/resources');
const { externalBlogs } = require("../controls/blogs/blogs");

/**
 * Routes
 */
Router.post ( '/auth/signup', signup );
Router.post ( '/auth/login', login );
Router.post ( '/auth/member', join_citclub);
Router.get ( '/pages/dashboard', verifyToken, dashboard );
Router.get ( '/helpers/interest', fieldsOfInterest);





// ROUTES FRO RESOURCES;

Router.post("/upload", verifyToken, uploadController.postNewFile);
Router.get("/files", uploadController.viewAllFilesInformation);
Router.get("/files/view/:name", verifyToken, uploadController.downLoadFileInfo);
Router.get("/files/details/:name", uploadController.ViewFileInformation);




// all about the developer
Router.get("/developer/", verifyToken, findDev);
Router.post(
  "/developer/add",
  verifyToken,
  [
    body(`workPrefference`)
      .not()
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid work prefference provided "),

    body(`fromLocation`)
      .not()
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid  location provided"),

    body(`techStack`)
      .not()
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid tech stack provided"),

    body(`githubProfile`)
      .not()
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid github profile provided"),

    body(`linkedInProfile`)
      .not()
      .trim()
      .isEmpty()
      .escape()
      .withMessage("Invalid linkedin profile provided"),
  ],
  addDev
);
Router.post("/developer/update", verifyToken, updateUser);
Router.delete("/developer/remove", verifyToken, removeDev);

/**
 * Blogs requests
 */
Router.get("/blog/:page",getBlogs)
Router.get("/blog/:id",getBlog)
Router.post("/blog",verifyToken,saveBlog)
Router.post("/upvoteblog/:id",upVoteBlog)
Router.post("/externalblogs",externalBlogs)
/**
 * Export routes
 */
module.exports = Router;
