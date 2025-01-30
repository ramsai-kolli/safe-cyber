const mongoose = require("mongoose");

//new user  model
const groupchat = new mongoose.Schema({
  group_id: Number,
  sentemail: String,
  sentname: String,
  time: String,
  mdata: String,
});

module.exports = mongoose.model("groupchat", groupchat);
