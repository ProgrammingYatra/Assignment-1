const catchAsyncError = require("../middlewares/catchAsyncError");
const fileModel = require("../models/fileModel");
let data = req.body;
let files = req.files;

exports.fileUpload = catchAsyncError(async function (req, res, next) {
  let uploaded = await aws.uploadFile(files[0]);
  let upload = await fileModel.create(uploaded);
  return res.status(201).send({
    status: true,
    message: "file uploaded successfully",
    data: upload,
  });
});
