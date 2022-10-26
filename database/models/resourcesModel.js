const mongoose = require("mongoose");

const ResourcesDetails = require("../schemas/resource");



const ResourcesModel = mongoose.model('ResourcesDetails', ResourcesDetails); //convert to model named ResourcesModel
module.exports = ResourcesModel; //export for controller use
