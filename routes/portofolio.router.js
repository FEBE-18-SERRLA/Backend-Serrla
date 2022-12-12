const express = require("express");
const router = express.Router();

const { searchPortofolio, getAllPortofolio } = require("../controllers/portofolio.controller");

router.get("/", getAllPortofolio);
router.get("/search", searchPortofolio);
// router.get("/filter", filterPortofolio);

module.exports = router;
