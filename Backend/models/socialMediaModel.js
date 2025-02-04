const mongoose = require("mongoose");

const socialmedia = new mongoose.Schema({
  name: String,
  email: {
    type: String,
  },
  matter: String,
  image: {
    type: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("socialmedia", socialmedia);
