const express = require("express");
const router = express.Router();

const { getAllTestimoni, addTestimoni, deleteTestimoniByID, getTestimoniByID, updateTestimoniByID } = require("../controllers/testimoni.controller");

router.get("/", getAllTestimoni);
router.get("/:id", getTestimoniByID);
router.post("/", addTestimoni);
router.put("/:id", updateTestimoniByID);
router.delete("/:id", deleteTestimoniByID);

module.exports = router;
