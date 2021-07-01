// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// get login page
router.get("/login", decorateHtmlResponse("Log In"), getLogin);

module.exports = router;
