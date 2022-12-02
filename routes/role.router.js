const express = require("express");
const router = express.Router();

const { getAllRole, addRole, deleteRoleByID, getRoleByID, updateRoleByID } = require("../controllers/role.controller");

router.get("/", getAllRole);
router.get("/:id", getRoleByID);
router.post("/", addRole);
router.put("/:id", updateRoleByID);
router.delete("/:id", deleteRoleByID);

module.exports = router;
