const express = require("express");
const router = express.Router();

const { contentController } = require("../controllers/contentController");
const { verifyToken } = require("../middleware/auth");

router.get("/", verifyToken, contentController);

module.exports = router;