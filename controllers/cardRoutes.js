//DEPENDENCIES
const Card = require("./../models/Card");
const express = require("express");

const router = express.Router();

//INDEX
router.get("/", async (req, res) => {
  try {
    const Card = await Card.find({});
    res.json(Card);
  } catch (err) {
    res.status(400).json(err);
  }
});

//CREATE

//DESTROY

//UPDATE

module.exports = router;
