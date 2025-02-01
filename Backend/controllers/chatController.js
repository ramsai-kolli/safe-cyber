require("dotenv").config(); // Load environment variables
const axios = require("axios");
const bodyParser = require("body-parser");

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

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

function generateLengthyString(messages) {
  return messages
    .map((message, index) => {
      const tag = index % 2 === 0 ? "assistant" : "user";
      return `${tag}: ${message.content}`;
    })
    .join(" ");
}

// const introContentPart1 =`You are now my personal AI model for aayush minstry of government of india. I will provide you with our previous conversation:  `;
// const introContentPart2= ` Your task is to analyze the entire conversation and then respond to the last message as if it were your own question,
// using the context provided.`;

const introContentPart1 = `You are now my personal AI model for my platform which is there for people to keep people safe from cyberbullying and getting scammed by fake news. Your task is to analyze the conversation context provided, focus on the last message, and respond with the most accurate and direct answer. `;
const introContentPart2 = `Please give a clear, concise response without asking follow-up questions or explaining the input. Simply answer the query based on the provided context. but dont give one word answer give the ample size of answer thats needed. also adapt to the language that got input from the user. and type your answer in that language not in english`;

exports.chatControl = async (req, res) => {
  try {
    const { messagesreq } = req.body;
    const chatSession = model.startChat({
      generationConfig,

      history: [],
    });
    const messages = generateLengthyString(messagesreq);
    console.log(messages);
    const result = await chatSession.sendMessage(
      `${introContentPart1}  ${messages} ${introContentPart2}`
    );
    console.log("we got something like : \n\n");
    console.log(result.response.text());
    return res.status(200).json({
      success: true,
      data: result.response.text(),
    });
  } catch (error) {
    console.error("Error details:", error); // Log detailed error information
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
    console.log("we got error at sending message to gemini");
  }
};

// Function to check if the news is fake or real
exports.checkFakeNews = async (req, res) => {
  try {
    const introContentPart3 = `You are now tasked with determining if the following news content is fake or real. Analyze the content and provide a detailed explanation why the news is fake, along with a credibility score (as a percentage) and the source of the news ins the json format.`;

    const { newsContent } = req.body; // The content of the news to check
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    // Generate the lengthy string based on the news content
    const messages = generateLengthyString([{ content: newsContent }]);

    // Send the message to the AI model to determine if it's real or fake
    const result = await chatSession.sendMessage(
      `${introContentPart3} ${newsContent} 

      Please provide the result in JSON format with the following keys:
      {
        "explanation": "Provide an explanation of whether the news is fake or real in 2 lines.",
        "realPercentage": "A credibility score between 0-100.",
        "source": "The website from which you verify the news in single line."
      }
        Do **not** include Markdown formatting or triple backticks.`
    );
    // Assume result contains the explanation, credibility score, and source
    // const explanation = result.response.text().includes("fake")
    //   ? "This news is fake."
    //   : "This news is real.";
    // const realPercentage = result.response.text().includes("fake") ? 0 : 100; // Example: 0% for fake news, 100% for real news
    // const source = ""; // Placeholder, you'd extract this from the result or news source

    let responseText = result.response.text();

    // Clean up unwanted Markdown formatting (removes ```json ... ```)
    responseText = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      return res.status(500).json({
        success: false,
        error:
          "Failed to parse AI response. AI might have returned an invalid format.",
        rawResponse: responseText, // Debugging: Send raw response to frontend if needed
      });
    }

    const { explanation, realPercentage, source } = parsedData;

    // Return the results in the required format
    return res.status(200).json({
      success: true,
      data: [
        {
          explanation: explanation,
          realPercentage: realPercentage,
          source: source,
        },
      ],
    });
  } catch (error) {
    console.error("Error details:", error);
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
};
