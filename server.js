//DEPENDENCIES
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

//ROOT
app.get("/", (req, res) => {
  res.send("This is the root");
});

//SERVER LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I'm listening on ${PORT}`);
});
