/* This file contains the logic for verifying the user authentication token, before sending a request */

/* ----- PACKAGES and FILES IMPORT ----- */
const jwt = require("jsonwebtoken"); // Jsonwebtoken
const dotenvConfig = require("../config/dotenvConfig"); // Config .env

/* EXPORT the authentification middleware */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, dotenvConfig.SECRET_TOKEN, (err, decoded) => {
      req.auth = { userId: decoded.userdID };

      if (!req.body.userId || req.body.userId !== decoded.userdID) {
        return res.status(401).json({ error: "Invalid ID or Token !" });
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(401).json({ error: "Unauthenticated request !" });
  }
};
