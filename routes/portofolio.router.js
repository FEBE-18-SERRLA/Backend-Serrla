const express = require("express");
const router = express.Router();

const { searchPortofolio, filterPortofolio, getAllPortofolio } = require("../controllers/course.controller");

router.get("/", getAllPortofolio);
router.get("/search", searchPortofolio);
router.get("/filter", filterPortofolio);

module.exports = router;
