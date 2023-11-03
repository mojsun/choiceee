const mongoose = require("mongoose");

const { Schema } = mongoose;

const menProductItems = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const MenProductItems = mongoose.model("MenProductItems", menProductItems);

module.exports = MenProductItems;
