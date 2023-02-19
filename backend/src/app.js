const express = require("express");
const ErrorHandler = require("./middlewares/error");
const File = require("./routes/fileRoute");
const multer=require("multer")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(multer().any())
app.use("/api",File);

//Error Handler middleware
app.use(ErrorHandler);
module.exports = app;
