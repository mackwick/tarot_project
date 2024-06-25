//DEPENDENCIES
const mongoose = require("./connection");

//MODEL
const { model, Schema } = mongoose;

const CardSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, rquired: true },
  upright: { type: Boolean, required: true },
  uprightKeywords: { type: String, required: true },
  reverseKeywords: { type: String, required: true },
  image: { type: String, required: true },
});

const Card = model("Card", CardSchema);

module.exports = Card;
