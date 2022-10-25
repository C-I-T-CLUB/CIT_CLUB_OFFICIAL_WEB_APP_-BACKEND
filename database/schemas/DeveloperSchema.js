const mongoose = require("mongoose");

const DeveloperSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "This user is already a developer"],
  },
  workPrefference: {
    type: String,
    required: true,
    trim: true,
  },
  fromLocation: {
    type: String,
    required: true,
    trim: true,
  },
  techStack: {
    type: [String],
    required: true,
    trim: true,
  },
  githubProfile: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "This profile is being used by another developer"],
  },
  linkedInProfile: {
    type: String,
    required: false,
    trim: true,
    unique: [true, "This profile is being used by another developer"],
  },
});

module.exports = DeveloperSchema;
