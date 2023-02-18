const express = require("express");
const { fileUpload } = require("../controllers/fileController");
const router=express.Router()


router.route("/upload").post(fileUpload)
module.exports = router;
