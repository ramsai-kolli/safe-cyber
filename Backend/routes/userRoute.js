const express = require("express");
const asyncMiddleware = require("../middleware/catchAsyncErrors");
const {
  createUser,
  userLogin,
  getUserInfo,
} = require("../controllers/userController");

const router = express.Router();

// registration for User
router.route("/user-sign-up").post(asyncMiddleware(createUser));

//login for User
router.route("/user-sign-in").post(asyncMiddleware(userLogin));

//et user info route
router.route("/getuinfo").post(asyncMiddleware(getUserInfo));
module.exports = router;
