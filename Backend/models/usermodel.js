const mongoose = require("mongoose");

//new user  model
const user = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  violated_count: { type: Number, default: 0 },
  banned_time: { type: String, default: "" },
  chats: [{ chat_id: Number }],
});

module.exports = mongoose.model("user", user);
