// external imports
const express = require("express");

// internal imports
const { getHome } = require("../controller/homeController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Home"), getHome);

module.exports = router;
