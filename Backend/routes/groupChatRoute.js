const express = require("express");
const { SaveGroupChat } = require("../controllers/groupChatController");

const router = express.Router();

// chat route
router.route("/pushmsg").post(SaveGroupChat);

module.exports = router;
