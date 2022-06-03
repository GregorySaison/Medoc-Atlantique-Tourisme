const express = require("express");
const router = express.Router();
const displayController = require("./controllers/displayController");

router.get("/hourtin", displayController.getHourtin);
router.get("/others", displayController.getAllOthers);

module.exports = router;
