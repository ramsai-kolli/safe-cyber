const mongoose = require("mongoose");
const multer = require("multer");
const GridFSBucket = require("mongodb").GridFSBucket;
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const socialMedia = require("../models/socialMediaModel");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Uploading the Image
exports.uploadPostImage = catchAsyncErrors(async (req, res) => {
  const uploadMiddleware = upload.single("image");

  uploadMiddleware(req, res, async (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const { name, email, matter } = req.body;

    try {
      const db = mongoose.connection.db;
      const bucket = new GridFSBucket(db);
      const imageBuffer = req.file.buffer;
      const uploadStream = bucket.openUploadStream(req.file.originalname, {
        metadata: { email },
      });

      uploadStream.end(imageBuffer);

      uploadStream.on("finish", async () => {
        const newSocialMedia = new socialMedia({
          name: name,
          email: email,
          matter: matter,
          image: req.file.originalname,
        });
        await newSocialMedia.save();

        res.status(200).json({
          success: true,
          message: "Image uploaded and linked successfully.",
          fileDetails: newSocialMedia,
        });
      });

      uploadStream.on("error", (err) => {
        res.status(500).send("Error uploading image: " + err.message);
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(400).json({ error: error.message, success: false });
    }
  });
});

// Function to get the Image based on email from metadata
exports.getPostImage = catchAsyncErrors(async (req, res) => {
  try {
    const { email } = req.body;
    const db = mongoose.connection.db;
    const bucket = new GridFSBucket(db);

    const file = await db
      .collection("fs.files")
      .findOne({ "metadata.email": email });

    if (!file) {
      return res
        .status(404)
        .json({ message: "File not found for this Email ID" });
    }

    res.set({
      "Content-Type": file.contentType || "image/jpeg",
      "Content-Disposition": `attachment; filename="${file.filename}"`,
    });

    const downloadStream = bucket.openDownloadStream(file._id);
    downloadStream.pipe(res);

    downloadStream.on("error", (err) => {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file.");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error retrieving file" });
  }
});
