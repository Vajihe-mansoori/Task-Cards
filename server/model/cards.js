const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const CardSchema = new Schema({
  title: String,
  task: String,
  time: Number,
  favorite: Boolean,
});

module.exports = model("Card", CardSchema);
