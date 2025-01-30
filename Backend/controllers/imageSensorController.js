const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require("dotenv").config(); // Load API key from .env file

// Initialize Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// Function to process uploaded image and extract text
exports.ImageContentSensor = async (req, res) => {
  try {
    // Ensure an image was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No image uploaded" });
    }

    // Read the uploaded image file
    const imageBuffer = fs.readFileSync(req.file.path);

    // Call the Gemini API to analyze content
    const result = await model.generateContent([
      {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: req.file.mimetype,
        },
      },
      `Check whether the extracted text contains any curse words. If yes, return "TEXT_TRUE", otherwise return "TEXT_FALSE".
       Also, check if the image contains any offensive symbols or gestures. If yes, return "IMAGE_TRUE", otherwise return "IMAGE_FALSE".
       Respond ONLY with two words: either "TEXT_TRUE IMAGE_TRUE", "TEXT_TRUE IMAGE_FALSE", "TEXT_FALSE IMAGE_TRUE", or "TEXT_FALSE IMAGE_FALSE".`,
    ]);

    // Delete the uploaded image file after processing
    fs.unlinkSync(req.file.path);

    // Extract response text
    const responseText = result.response.text().trim();

    console.log("Gemini API Response:", responseText);

    // Check if Gemini detected offensive content
    const containsCurseWords = responseText.includes("TEXT_TRUE");
    const containsCurseActions = responseText.includes("IMAGE_TRUE");

    if (containsCurseWords || containsCurseActions) {
      return res.status(201).json({
        success: false,
        message: "Image contains offensive content and does not obey.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Image does not contain any offensive content.",
    });
  } catch (error) {
    console.error("Error processing uploaded image:", error);
    res
      .status(500)
      .json({ success: false, error: "Error processing the image" });
  }
};
