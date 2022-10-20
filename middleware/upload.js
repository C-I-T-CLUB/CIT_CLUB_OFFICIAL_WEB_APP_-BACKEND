const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const config = require('../config/index')


console.log("DB URL    ", config.DB_URI + config.DB_NAME)

var storage = new GridFsStorage({
  url: config.DB_URI + config.DB_NAME,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    console.log(req.body.course)
    return {
      bucketName: config.RESOURCEBUCKET,
      filename: `${Date.now()}-mmuResources-${file.originalname}`,
      // get file metadata of the uploader and descriptiuon
      metadata:{
        uploaderName: "Anonymous",
        description: req.body.course,
        unitName:req.body.unit,

      }
    };
  }
});


var uploadFiles = multer({ storage: storage}).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
