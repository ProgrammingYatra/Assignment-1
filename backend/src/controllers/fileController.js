const catchAsyncError = require("../middlewares/catchAsyncError");
const fileModel = require("../models/fileModel");
const aws=require("../Aws/aws")

exports.fileUpload = catchAsyncError(async function (req, res, next) {
  let files = req.files;
  let uploaded = await aws.uploadFile(files[0]);
  let upload = await fileModel.create({uploaded});
  return res.status(201).json({
    status: true,
    message: "file uploaded successfully",
    data: upload,
  });
});
