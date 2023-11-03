const mongoose = require("mongoose");

const { Schema } = mongoose;

const womenProductItems = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const WomenProductItems = mongoose.model(
  "WomenProductItems",
  womenProductItems
);

module.exports = WomenProductItems;
