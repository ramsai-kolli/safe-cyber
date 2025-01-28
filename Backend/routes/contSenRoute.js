const express = require("express");
const { chatControl } = require("../controllers/contSenController");

const router = express.Router();

// chat route
router.route("/chat").post(chatControl);

module.exports = router;
