const express = require("express");
const router = express.Router();

const { getAllInstructure, addInstructure, deleteInstructureByID, getInstructureByID, updateInstructureByID } = require("../controllers/instructure.controller");

router.get("/", getAllInstructure);
router.get("/:id", getInstructureByID);
router.post("/", addInstructure);
router.put("/:id", updateInstructureByID);
router.delete("/:id", deleteInstructureByID);

module.exports = router;
