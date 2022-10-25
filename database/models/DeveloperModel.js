const mongoose = require("mongoose");
const DeveloperSchema = require("../schemas/DeveloperSchema");

module.exports = mongoose.model("citclub developers", DeveloperSchema);
