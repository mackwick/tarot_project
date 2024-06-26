//DEPENDENCIES
const Card = require("./../models/Card");
const express = require("express");

const router = express.Router();

//INDEX
router.get("/", async (req, res) => {
  try {
    const card = await Card.find({});
    res.json(card);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

//CREATE
router.post("/", async (req, res) => {
  try {
    const newCard = await Card.create(req.body);
    res.json(newCard);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

//DESTROY
router.delete("/:id", async (req, res) => {
  try {
    const byeCard = await Card.findByIdAndDelete(req.params.id);
    res.json(byeCard);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

//UPDATE

module.exports = router;
