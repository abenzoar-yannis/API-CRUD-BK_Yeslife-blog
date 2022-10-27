/* This file contains the creation of the Express application,
the connection to the database, and the configuration of the CORS */

/* ----- PACKAGES and FILES IMPORT ----- */
const express = require("express"); // Express package
const mongoose = require("mongoose"); // Mongoose package
const dotenvConfig = require("./config/dotenvConfig"); // Config .env
const fileupload = require("express-fileupload"); // Express fileupload

const app = express(); // Express Application
const path = require("path"); // gives access to the file path

/* --- ROUTES IMPORT --- */
const postRoutes = require("./routes/post");

/* ----- MIDDLEWARE ----- */
app.use(express.json()); // Interpretation of the request body
app.use(fileupload());

/* ----- DATABASE ----- */
mongoose // MongoDB Atlas
  .connect(
    `mongodb+srv://${dotenvConfig.DB_USER}:${dotenvConfig.DB_PASSWORD}@${dotenvConfig.DB_HOST}/${dotenvConfig.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Successful connection to MongoDB !"))
  .catch(() => console.log("Connection to MongoDB failed !"));

/* ----- CORS ----- */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/* ----- ROUTES ----- */
app.use("/images", express.static(path.join(__dirname, "images"))); // management of requests to the '/images' folder
app.use("/api/post", postRoutes);

/* ----- EXPORTS ----- */
module.exports = app; // Express Application EXPORT
