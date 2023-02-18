const express = require("express");
const ErrorHandler = require("./middlewares/error");
const File = require("./routes/fileRoute");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",File);

//Error Handler middleware
app.use(ErrorHandler);
module.exports = app;
