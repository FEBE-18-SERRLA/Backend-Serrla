const express = require("express");
const router = express.Router();

const { getAllEvent, addEvent, deleteEventByID, getEventByID, updateEventByID } = require("../controllers/event.controller");

router.get("/", getAllEvent);
router.get("/:id", getEventByID);
router.post("/", addEvent);
router.put("/:id", updateEventByID);
router.delete("/:id", deleteEventByID);

module.exports = router;
