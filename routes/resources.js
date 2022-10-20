

const express = require("express");
const router = express.Router();
const uploadController = require("../controls/resouces/upload");

let routes = app => {
  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  return app.use("/", router);
};

module.exports = routes;
