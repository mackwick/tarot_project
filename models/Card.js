//DEPENDENCIES
const mongoose = require("./connection");

//MODEL

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  upright: { type: Boolean, required: true },
  uprightKeywords: { type: String, required: true },
  reverseKeywords: { type: String, required: true },
  image: { type: String, required: true },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
