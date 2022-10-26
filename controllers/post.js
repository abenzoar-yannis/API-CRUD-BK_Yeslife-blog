/* This file contains the work logic for the users routes */

/* ----- PACKAGES and FILES IMPORT ----- */
const Post = require("../models/post"); // Models post
const dotenvConfig = require("../config/dotenvConfig"); // Config .env
const jwt = require("jsonwebtoken");

/* EXPORT : Logic for the post creation */
exports.createPost = (req, res, next) => {
  res.status(200).json({ message: "Route create Post" });
};

/* EXPORT : Logic for transmitting all posts */
exports.getAllPosts = (req, res, next) => {
  res.status(200).json({ message: "Route get all Posts" });
};

/* EXPORT : Logic for transmitting one post */
exports.getOnePost = (req, res, next) => {
  res.status(200).json({ message: "Route get one Post" });
};

/* EXPORT : Logic for modify a post */
exports.modifyPost = (req, res, next) => {
  res.status(200).json({ message: "Route modify a Post" });
};

/* EXPORT : Logic for deleted a post */
exports.deletePost = (req, res, next) => {
  res.status(200).json({ message: "Route delete a Post" });
};
