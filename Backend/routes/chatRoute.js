const express = require("express");
const { chatControl, checkFakeNews } = require("../controllers/chatController");

const router = express.Router();

// chat route
router.route("/chat").post(chatControl);

//fact check route
router.route("/fact-check").post(checkFakeNews);

module.exports = router;
