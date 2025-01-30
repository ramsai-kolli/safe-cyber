const mongoose = require("mongoose");

//new user  model
const metadata = new mongoose.Schema({
  group_id: Number,
});

module.exports = mongoose.model("metadata", metadata);
