const express = require("express");
const router = express.Router();

const { getAllSchool, addSchool, deleteSchoolByID, getSchoolByID, updateSchoolByID } = require("../controllers/school.controller");

router.get("/", getAllSchool);
router.get("/:id", getSchoolByID);
router.post("/", addSchool);
router.put("/:id", updateSchoolByID);
router.delete("/:id", deleteSchoolByID);

module.exports = router;
