const catchAsyncErrors = require("../middleware/catchAsyncErrors"); // Assuming this is a custom error handling middleware
const GroupChat = require("../models/groupChatModel"); // GroupChat model
const Metadata = require("../models/metadataModel"); // Metadata model

exports.SaveGroupChat = catchAsyncErrors(async (req, res) => {
  const { sentemail, sentname, mdata } = req.body;

  // Check if required data is provided
  if (!sentemail || !sentname || !mdata) {
    return res.status(400).json({
      success: false,
      message: "Please enter all the required fields.",
    });
  }

  try {
    // Retrieve the metadata record
    let metadataRecord = await Metadata.findOne({});

    let group_id;

    if (metadataRecord) {
      // If metadata exists, increment the group_id
      group_id = metadataRecord.group_id;

      // Increment the group_id by 1
      metadataRecord.group_id += 1;

      // Save the updated metadata
      await metadataRecord.save();
    } else {
      // If no metadata exists, create a new metadata record and set group_id to 1
      group_id = 1;
      const newMetadata = new Metadata({
        group_id,
      });
      await newMetadata.save();
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
    const newChat = new GroupChat({
      group_id: metadataRecord.group_id,
      sentemail,
      sentname,
      mdata,
      time: formattedTime, // Using formatted date and time
    });

    // Save the new GroupChat document
    await newChat.save();

    // Return the response
    return res.status(200).json({
      success: true,
      message: "Group chat saved and metadata updated successfully.",
      data: newChat,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving group chat.",
      error: error.message,
    });
  }
});
