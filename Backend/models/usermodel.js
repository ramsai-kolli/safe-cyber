const mongoose = require("mongoose");

//new user  model
const user = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", user);
