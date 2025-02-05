const express = require("express");
const {
  uploadPostImage,
  getPostImage,
} = require("../controllers/socialMediaController");
const router = express.Router();

//route for saving of the image
router.route("/upload-image-post").post(uploadPostImage);

//route for getting image
router.route("/get-image-post").post(getPostImage);

module.exports = router;
