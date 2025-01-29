const express = require("express");
const asyncMiddleware = require("../middleware/catchAsyncErrors");
const { createUser, userLogin } = require("../controllers/userController");

const router = express.Router();

// registration for User
router.route("/user-sign-up").post(asyncMiddleware(createUser));

//login for User
router.route("/user-sign-in").post(asyncMiddleware(userLogin));

module.exports = router;
