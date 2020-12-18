const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: [[Number]],
  size: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Data", createSchema);
