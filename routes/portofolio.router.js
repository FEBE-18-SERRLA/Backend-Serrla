const express = require("express");
const router = express.Router();

const { searchPortofolio, filterPortofolio } = require("../controllers/course.controller");

router.get("/search", searchPortofolio);
router.get("/filter", filterPortofolio);

module.exports = router;