

const multer = require("multer");
const util = require("util");

// max size to be 50mb
const fileMaxSize = 50 * 1024 * 1024;

// uploads dir
const uploadDir = "./static/assets/uploads/";

let fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  uploadDir);
  },
  filename: (req, file, cb) => {
    console.log("Receiving a File on the backend:.....")
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});


let uploadedFile = multer({
  storage: fileStorage,
  limits: { fileSize: fileMaxSize },
}).single("file");

let uploadedFileMiddleware = util.promisify(uploadedFile);
module.exports = uploadedFileMiddleware;
