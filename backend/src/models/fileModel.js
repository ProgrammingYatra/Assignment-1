const mongoose = require("mongoose");


const fileSchema = new mongoose.Schema({
  videofile: {
    type: String,
    required: [true, "Please Select File"],
  },
  jsonFile: {
    type: String,
    required: [true, "Please Select File"],
  },
});

module.exports = mongoose.model("File", fileSchema);
