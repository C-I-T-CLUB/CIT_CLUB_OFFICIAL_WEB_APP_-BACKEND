
const config = require('../../config/index')


const upload = require("../../middleware/upload");
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

<<<<<<< HEAD
const baseUrl = `http://localhost:${config.PORT}/files/`;
=======
const baseUrl = `http://localhost:${config.PORT}/api/files/`;
>>>>>>> master
const url = config.DB_URI;
console.log("Multer DB URL is  ", url)



const mongoClient = new MongoClient(url);

<<<<<<< HEAD
=======


// send file to the db
>>>>>>> master
const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);

    if (req.file == undefined) {
      return res.send({
        message: "You must select a file.",
      });
    }

    return res.send({
      message: "File has been uploaded.",
<<<<<<< HEAD
=======
      status:"OK",
>>>>>>> master
    });
  } catch (error) {
    console.log(error);

    return res.send({

      message: `Error when trying upload image: ${error}`,
    });
  }
};

<<<<<<< HEAD
const getListFiles = async (req, res) => {
=======

// get all files
const getAllFiles = async (req, res) => {
>>>>>>> master
  try {
    await mongoClient.connect();

    const database = mongoClient.db(config.DB_NAME);
    const images = database.collection("Resources.files");
    const cursor = images.find({});

    if ((await cursor.count()) === 0) {
      return res.status(500).send({
        message: "No files found!",
      });
    }

    let fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: baseUrl + doc.filename,
        nam1e:doc.metadata
      });
    });

    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

<<<<<<< HEAD
const download = async (req, res) => {
=======
const downloadFile = async (req, res) => {
>>>>>>> master
  try {
    await mongoClient.connect();

    const database = mongoClient.db(config.DB_NAME);
    const bucket = new GridFSBucket(database, {
      bucketName: config.RESOURCEBUCKET,
    });

    let downloadStream = bucket.openDownloadStreamByName(req.params.name);

    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });


    downloadStream.on("error", function (err) {
      return res.status(404).send({ message: "Cannot download the Image! "+err });
    });

    downloadStream.on("end", () => {
      return res.end();
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  uploadFiles,
<<<<<<< HEAD
  getListFiles,
  download,
=======
  getAllFiles,
  downloadFile,
>>>>>>> master
};
