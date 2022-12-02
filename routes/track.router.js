const express = require("express");
const router = express.Router();

const { getAllTrack, addTrack, deleteTrackByID, getTrackByID, updateTrackByID } = require("../controllers/track.controller");

router.get("/", getAllTrack);
router.get("/:id", getTrackByID);
router.post("/", addTrack);
router.put("/:id", updateTrackByID);
router.delete("/:id", deleteTrackByID);

module.exports = router;
