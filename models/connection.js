//DEPENDENCIES
require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

//CONNECTION
mongoose.connect(DATABASE_URL);
mongoose.connection
  .on("open", () => console.log("Mongo connected"))
  .on("closed", () => console.log("Mongo disconnected"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
