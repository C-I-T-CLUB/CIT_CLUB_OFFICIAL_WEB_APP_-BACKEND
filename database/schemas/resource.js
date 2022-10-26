const mongoose = require("mongoose");

// tea schema
const ResourcesDetails = new mongoose.Schema({
    fileName: {type:String, required:true},
    filePath: {type:String},
    description: {type:String},
    unit: {type:String},
    course: {type:String},
    uploaderMail:{type:String, required:true},
    date: {type: Date,default: Date.now}
});



const ResourcesModel = mongoose.model('ResourcesDetails', ResourcesDetails); //convert to model named ResourcesModel
module.exports = ResourcesModel; //export for controller use
