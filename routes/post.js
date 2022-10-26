/* This file contains the user route logic. */

/* ----- PACKAGES and FILES IMPORT ----- */
const express = require("express"); // Express package
const router = express.Router(); // Express Router
const postCtrl = require("../controllers/post"); // User controlleur
const auth = require("../middleware/auth"); // Middleware for authentification
const isAdmin = require("../middleware/isAdmin"); // Middleware for isAdmin

/* ----- ROUTES ----- */
router.post("/newpost", isAdmin, auth, postCtrl.createPost); // Create a post
router.get("/posts", auth, postCtrl.getAllPosts); // Get all posts
router.get("/post/:id", postCtrl.getOnePost); // Get one post
router.put("/post/:id", isAdmin, auth, postCtrl.modifyPost); // Get one post
router.delete("/post/:id", isAdmin, auth, postCtrl.deletePost); // Delete a post

/* ROUTE Export */
module.exports = router;
