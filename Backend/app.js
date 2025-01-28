const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const user = require("./routes/userRoute");
const fakenews = require("./routes/fakenewsRoute");
const spam = require("./routes/scamRoute");
// require('dotenv').config(); // to access the values .env file

const app = express();

// List of allowed origins
const allowedOrigins = [
  "https://ayush-sih-2024-frontend.vercel.app",
  "https://chaitanyakadali.vercel.app",
];

// Dynamic origin function
const corsOptions = {
  origin: function (origin, callback) {
    // If no origin or origin is in the allowed list, allow it
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS --->said by dynamic function"));
    }
  }, // Explicitly allow this frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "authorization"],
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

// Handle preflight (OPTIONS) requests
app.options("*", cors(corsOptions));

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MongoDB Atlas Connection
try {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MongoDB URI not defined in .env file.");
    process.exit(1);
  }

  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("Connected to MongoDB Atlas CLOUD !!");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
} catch (e) {
  console.log("cloud connecting error");
}

// MongoDB Compass connection
// mongoose
//   .connect("mongodb://localhost:27017/cyber-safe")
//   .then(() => console.log("Connected to database"))
//   .catch((e) => console.log(e));

// importing apis
const chat = require("./routes/chatRoute");
const sendEmail = require("./routes/sendEmailRoute");
const tokenVerify = require("./routes/tokenVerifyRoute");

// pdf routes

// const pdfQualityCheck=require("./routes/PdfQualityCheck");
// const verifyQuideline=require("./routes/VerifyQuidelineRoute");
// const Pdfmanagement=require("./routes/pdfUploadingRoute");

//assigning api to user
app.use("/api", user);
app.use("/api", fakenews);
app.use("/api", spam);

// assigning the apis
app.use("/api", chat);
app.use("/api", sendEmail);

app.use("/api", tokenVerify);
// app.use("/api", status);
// app.use("/api",pdfQualityCheck);
// app.use("/api",verifyQuideline);
// app.use("/api",PeerForum);
// app.use("/api",Pdfmanagement);

// Serve the static files (HTML, CSS, JS)
app.use(express.static("public"));
// to display (serve) by default html content ( to make sure that the server is running when HOSTED)
app.get(["/", "/api"], (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (e) {
    console.log("erorrrrr", e);
  }
});

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
