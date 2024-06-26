//DEPENDENCIES
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const methodOverride = require("method-override");
const CardRouter = require("./controllers/cardRoutes");

const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/card", CardRouter);

//ROOT
app.get("/", (req, res) => {
  res.send("This is the root");
});

//SERVER LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I'm listening on ${PORT}`);
});
