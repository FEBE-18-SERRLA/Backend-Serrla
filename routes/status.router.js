const express = require("express");
const router = express.Router();

const { getAllStatus, addStatus, deleteStatusByID, getStatusByID, updateStatusByID } = require("../controllers/status.controller");

router.get("/", getAllStatus);
router.get("/:id", getStatusByID);
router.post("/", addStatus);
router.put("/:id", updateStatusByID);
router.delete("/:id", deleteStatusByID);

module.exports = router;
