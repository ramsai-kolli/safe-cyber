require("dotenv").config(); // Load environment variables

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const introContentPart1 = ` you are my backend api right now. the following message may contain badwords and cuss words. now i want you to replace all those bad words with *** and return the same statment exactly for me  `;
const introContentPart2 = `note : dont put any generic intros like "sure i can do this for you etc" just give out the raw statement as i gave you`;

exports.chatControl = async (req, res) => {
  try {
    const { tdata } = req.body;
    const chatSession = model.startChat({
      generationConfig,

      history: [],
    });

    const result = await chatSession.sendMessage(
      `${introContentPart1} ${introContentPart2}  ${tdata} `
    );
    console.log("we got something like : \n\n");
    console.log(result.response.text());
    return res
      .status(200)
      .json({ sdata: result.response.text(), sensored: true });
  } catch (error) {
    console.log("we got error at sending message to gemini");
    console.error("Error details:", error); // Log detailed error information
    return res.status(400).json({
      sensored: true,
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
};
