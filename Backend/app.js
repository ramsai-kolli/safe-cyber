const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const path = require("path"); // to use __dirname
const session = require("express-session");

require("dotenv").config(); // to access the values .env file

const user = require("./routes/userRoute");
const fakenews = require("./routes/fakenewsRoute");
const spam = require("./routes/scamRoute");
const contsensImage = require("./routes/imageSensorRoute");
const msgData = require("./routes/msgDataRoute");
const socialMedia = require("./routes/socialMediaRoute");
const metachat=require("./routes/metaChatRoute");

const app = express();

// List of allowed origins
const allowedOrigins = ["https://safecyber.vercel.app"];

// // Dynamic origin function
// const corsOptions = {
//   origin: function (origin, callback) {
//     // If no origin or origin is in the allowed list, allow it
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS --->said by dynamic function"));
//     }
//   }, // Explicitly allow this frontend
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "authorization"],
//   credentials: true, // Allow credentials (cookies, authorization headers)
// };

// // const corsOptions = {
// //   origin: "*", // Allows all origins
// //   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
// //   allowedHeaders: ["Content-Type", "Authorization"],
// //   credentials: true, // Enable if your frontend needs cookies/auth
// // };

// app.use(cors(corsOptions));

// // Handle preflight (OPTIONS) requests globally
// app.options("*", cors(corsOptions));

// Middleware

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true); // Allows all origins dynamically
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["*"],
  credentials: true, // Allows credentials (cookies, auth headers)
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

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
const contSen = require("./routes/contSenRoute");

// const groupChat = require("./routes")

// assigning the apis
app.use("/api", chat);
app.use("/api", sendEmail);
app.use("/api", tokenVerify);
app.use("/api", contSen);
app.use("/api", contsensImage);
app.use("/api", msgData);
app.use("/api", socialMedia);
app.use("/api",metachat);

//assigning api to user
app.use("/api", user);
app.use("/api", fakenews);
app.use("/api", spam);

// Serve the static files (HTML, CSS, JS)
app.use(express.static("public"));
// to display (serve) html ( to make sure that the server is running when HOSTED)
app.get(["/", "/api"], (req, res) => {
  try {
    res.sendFile(__dirname + "/public/index.html");
  } catch (e) {
    console.log("erorrrrr", e);
  }
});

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
