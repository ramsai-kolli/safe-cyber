const express = require("express");
const { chatControl } = require("../controllers/contSenController");

const router = express.Router();

// chat route
router.route("/contsensor-text").post(chatControl);

module.exports = router;
