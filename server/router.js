const express = require("express");
const router = express.Router();
const displayController = require("./controllers/displayController");

router.get("/hourtin", displayController.getHourtin);

module.exports = router;
