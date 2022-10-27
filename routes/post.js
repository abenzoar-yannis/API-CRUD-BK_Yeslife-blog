/* This file contains the user route logic. */

/* ----- PACKAGES and FILES IMPORT ----- */
const express = require("express"); // Express package
const router = express.Router(); // Express Router
const postCtrl = require("../controllers/post"); // User controlleur

/* ----- ROUTES ----- */
router.post("/", postCtrl.createPost); // Create a post
router.get("/", postCtrl.getAllPosts); // Get all posts
router.get("/:id", postCtrl.getOnePost); // Get one post
router.put("/:id", postCtrl.modifyPost); // Get one post
router.delete("/:id", postCtrl.deletePost); // Delete a post

router.put("/:id/like", postCtrl.likeAPost); // like or dislike a post

/* ROUTE Export */
module.exports = router;
