const mongoose = require("mongoose");

//new
const chatinfo = new mongoose.Schema({
  chat_id: Number,
  chat_name: String,
});

module.exports = mongoose.model("chatinfo", chatinfo);
