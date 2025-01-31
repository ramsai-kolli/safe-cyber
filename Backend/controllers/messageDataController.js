const catchAsyncErrors = require("../middleware/catchAsyncErrors"); // Assuming this is a custom error handling middleware
const messagedata = require("../models/messageDataModel"); // GroupChat model
const chatinfo = require("../models/chatinfoModel"); // Metadata model
const user = require("../models/usermodel");

exports.SaveMessageData = catchAsyncErrors(async (req, res) => {
  const { chat_id, sentemail, mdata } = req.body;

  // Check if required data is provided
  if (!chat_id || !sentemail || !mdata) {
    return res.status(400).json({
      success: false,
      message: "Please enter all the required fields.",
    });
  }

  try {
    const chat_name = await chatinfo.findOne({ chat_id });
    if (!chat_name) {
      return res.status(204).json({
        success: false,
        message: "chat_id doesnt find in the chatinfo model",
      });
    }

    const fetch_name = await user.findOne({ email: sentemail });

    if (!fetch_name) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Format current date and time in "YYYY-MM-DD HH:mm:ss"
    const now = new Date();
    const formattedTime = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
      now.getHours()
    ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
      now.getSeconds()
    ).padStart(2, "0")}`;

    // Create a new GroupChat document with the generated group_id and formatted time
    const newMsgData = new messagedata({
      chat_id,
      chat_name: chat_name.chat_name,
      sentemail,
      sentname: fetch_name.name,
      time: formattedTime,
      mdata, // Using formatted date and time
    });

    // Save the new GroupChat document
    await newMsgData.save();

    // Return the response
    return res.status(200).json({
      success: true,
      message: "Message Data saved .",
      data: newMsgData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving group chat.",
      error: error.message,
    });
  }
});

exports.getMessageData = catchAsyncErrors(async (req, res) => {
  const { chat_id } = req.body;
  try {
    const matched_chat_data = await messagedata.find({ chat_id });

    if (!matched_chat_data) {
      return res.status(204).json({
        success: false,
        message: "no messages existed with the given chat_id",
      });
    }

    return res.status(201).json({
      success: true,
      message: `successfully retrived all messages with chat_id:${chat_id}`,
      msgs: matched_chat_data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving group chat.",
      error: error.message,
    });
  }
});
