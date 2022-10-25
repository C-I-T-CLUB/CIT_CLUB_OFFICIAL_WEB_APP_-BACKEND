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

const {
  updateUser,
  removeDev,
  findDev,
  addDev,
} = require("../controls/pages/findDeveloper");



const  uploadController  = require ( './resources/resources');



const  uploadController  = require ( './resources/resources');

/**
 * Routes
 */
Router.post("/auth/signup", signup);
Router.post("/auth/login", login);
Router.post("/auth/member", join_citclub);
Router.get("/pages/dashboard", verifyToken, dashboard);
Router.get("/helpers/interest", fieldsOfInterest);

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
Router.post ( '/auth/signup', signup );
Router.post ( '/auth/login', login );
Router.post ( '/auth/member', join_citclub);
Router.get ( '/pages/dashboard', verifyToken, dashboard );
Router.get ( '/helpers/interest', fieldsOfInterest);





// ROUTES FRO RESOURCES;

Router.post("/upload", uploadController.uploadFiles);
Router.get("/files", uploadController.getAllFiles);
Router.get("/files/:name", uploadController.downloadFile);




/**
 * Export routes
 */
module.exports = Router;
