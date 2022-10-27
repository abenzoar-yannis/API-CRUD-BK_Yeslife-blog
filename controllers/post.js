/* This file contains the work logic for the users routes */

/* ----- PACKAGES and FILES IMPORT ----- */
const Post = require("../models/post"); // Models post
const fs = require("fs"); // File system

/* EXPORT : Logic for the post creation */
exports.createPost = (req, res, next) => {
  /* 'mine_type' dictionary, which defines the accepted file types */
  const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };

  if (req._body) {
    // create a post without an image
    const postObject = req.body;

    const post = new Post({ ...postObject });
    post
      .save()
      .then((post) =>
        res.status(201).json({ message: "Post register!", post: post })
      )
      .catch((error) => res.status(403).json({ error }));
  } else {
    // create a post with an image
    // Use Form data with key 'image' and 'post'
    const file = req.files.image;
    const newPath = __dirname.split("controllers").join("") + "images/";
    const name = req.files.image.name.split(" ").join("_");
    const extension = MIME_TYPES[req.files.image.mimetype];
    const filename = name + Date.now() + "." + extension;

    const postObject = JSON.parse(req.body.post);
    const post = new Post({
      ...postObject,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${filename}`,
    });

    post
      .save()
      .then(() => {
        file.mv(`${newPath}${filename}`, (err) => {
          if (err) {
            res.status(500).send({ message: "File upload failed", code: 500 });
          }
        });
      })
      .then((post) =>
        res.status(201).json({ message: "Post enregistrée!", post: post })
      )
      .catch((error) => res.status(403).json({ error }));
  }
};

/* EXPORT : Logic for transmitting all posts */
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(404).json({ error }));
};

/* EXPORT : Logic for transmitting one post */
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

/* EXPORT : Logic for modify a post */
exports.modifyPost = (req, res, next) => {
  res.status(200).json({ message: "Route modify a Post" });
};

/* EXPORT : Logic for deleted a post */
exports.deletePost = (req, res, next) => {
  res.status(200).json({ message: "Route delete a Post" });
};

/* EXPORT : Logic for like or dislike a post */
exports.likeAPost = (req, res, next) => {
  res.status(200).json({ message: "Route like or dislike a Post" });
};
