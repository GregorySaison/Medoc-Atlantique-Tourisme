const express = require("express");
const router = express.Router();
const displayController = require("./controllers/displayController");

router.get("/", displayController.getHourtin);

module.exports = router;
