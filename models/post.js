/* This file contains the schema of a post, for the MongoDB Atlas database */

/* ----- PACKAGES IMPORT ----- */
const mongoose = require("mongoose"); // Mongoose

/* --- POST SCHEMA --- */
const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: Number, required: true },
  message: { type: String, required: true, trim: true },
  imageUrl: { type: String },
  likes: { type: Number, required: true, default: 0 },
  dislikes: { type: Number, required: true, default: 0 },
  usersLiked: { type: [String], required: true, default: [] },
  usersDisliked: { type: [String], required: true, default: [] },
});

/* EXPORT : Post schema  */
module.exports = mongoose.model("Post", postSchema);
