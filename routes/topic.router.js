const express = require("express");
const router = express.Router();

const { getAllTopic, addTopic, deleteTopicByID, getTopicByID, updateTopicByID } = require("../controllers/topic.controller");

router.get("/", getAllTopic);
router.get("/:id", getTopicByID);
router.post("/", addTopic);
router.put("/:id", updateTopicByID);
router.delete("/:id", deleteTopicByID);

module.exports = router;
