/* This file contains the logic for verifying the user role admin, before sending a request */

/* ----- PACKAGES and FILES IMPORT ----- */
const dotenvConfig = require("../config/dotenvConfig"); // Config .env

/* EXPORT the isAdmin middleware */
module.exports = (req, res, next) => {
  try {
    if (!req.body.role || req.body.role !== dotenvConfig.ADMIN_ROLE) {
      return res.status(401).json({ error: "Unauthorized user !" });
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ error: "Bad Request !" });
  }
};
