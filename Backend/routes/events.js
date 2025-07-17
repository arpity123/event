const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const { addEvent } = require("../controller/events");

// add event
router.post("/add", upload.single("image"), addEvent);

// update event

// get events

// delete event --> you all will do

module.exports = router;