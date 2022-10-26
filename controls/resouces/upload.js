const jwt_decode = require ( 'jwt-decode' );
const fs = require("fs");
const uploadedFile = require("../../middleware/upload");
// const {ResourcesModel} = require("../../database/index");
const ResourcesModel = require("../../database/schemas/resource");


const uploadDir = "./static/assets/uploads";
const baseUrl = "http://localhost:3000/api/files/view";




// upload a file to the db and dismk
const postNewFile = async (req, res) => {
  const token = req.header ('auth-token').slice ( 7, req.header ('auth-token').length);
  const userDetails = jwt_decode (token)
  let userEmail = userDetails.email
  console.log("userEmail ", userEmail)
  try {
    await uploadedFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    // ensure all information are present else raise an error
    if (req.body.description !== undefined && req.body.unit !== undefined && req.body.course !== undefined) {
      // get other metadata from here
      const ResourcesObj= new ResourcesModel({
           fileName:req.file.originalname,
           filePath: req.file.path,
           description: req.body.description,
           unit: req.body.unit,
           course: req.body.course,
           uploaderMail: userEmail,
      })

      ResourcesObj.save()
      console.log("Updated Resources models")

      res.status(200).send({
        message: "File Uploaded the file successfully: " + req.file.originalname,
        fileDetails: ResourcesObj
      });

    }
    else{
      console.log(
        req.body.description, req.body.unit, req.body.course
      )
      res.status(500).send({
        message: "Please Ensure all fields Are present ",
        "desc":"have these fields",
        "sampleFields":{unit:"HHHHHHH",course:"CCCCCCCCCC",description:"DDDDDDDDD", file:"<FILEOBJ>" },
      })
    }

  } catch (err) {
    res.status(500).send({
      message: `An Error Occured during uploafing:  ${err}`,
    });
  }
};


// retrieve all file informations
const viewAllFilesInformation = (req, res) =>{
  // get the folder where the files are stored.
  let BASE_DIR = uploadDir;

  fs.readdir(BASE_DIR, function(err, files_res){
    if (err) {
      req.status(500).send({
        message:"Unable to retrieve Some files from the storeage!",
        status: "500",
        data : [],
      });
    }

    // we get all the files availabel

    // iterate trhough them and get the information into the list
    ResourcesModel.find({})
    .then((files) =>{
      let allFilesInfo =[];
      files.forEach((file)=>{
        allFilesInfo.push(
          {
          fileId: file._id,
          fileName:file.fileName,
          filePath:file.fileName,
          description: file.description,
          unit: file.unit,
          course: file.course,
          uploaderMail: file.uploaderMail,
          uploadDate: file.date,
          accessUrl: baseUrl + "/"+ file.fileName,
        }
      );
      });
      res.status(200).send(allFilesInfo);
    })

    .catch((err)=> res.status(500).send({
      message: "error Occured  "+ err,
      status: "500",
      data: "No data because of the error",
    }))
  });
}


// view a specific file information
const ViewFileInformation = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = uploadDir;

  ResourcesModel.find({_id: fileName})
  .then((files) =>{
    let allFilesInfo =[];
    files.forEach((file)=>{
      // console.log(file)
      allFilesInfo.push({
        fileId: file._id,
        fileName:file.fileName,
        filePath: file.fileName,
        description: file.description,
        unit: file.unit,
        course: file.course,
        uploaderMail: file.uploaderMail,
        uploadDate: file.date,
        accessUrl: baseUrl + file.fileName,
      });
    });
    res.status(200).send(allFilesInfo);
  })

  .catch((err)=> res.status(500).send({
    message: "error Occured  "+ err,
    status: "500",
    data: "No data because of the error",
  }))

};


// it is downloaded from the disk and shown on the viewing application
const downLoadFileInfo  = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = uploadDir;
  console.log(directoryPath, fileName)
  res.download(directoryPath + "/"+ fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Unabel to download the file you requestd. " + err,
        status:"500"
      });
    }
    // else{
    //   res.status(200).send({
    //     "status":200,
    //     "message":"Downloaded well"
    //   })
    // }

  });
};




module.exports = {
  postNewFile,
  viewAllFilesInformation,
  ViewFileInformation,
  downLoadFileInfo,
};
