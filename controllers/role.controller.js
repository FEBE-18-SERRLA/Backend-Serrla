const Role = require("../models/role");
const bcrypt = require("bcrypt");

module.exports = {
  getAllRole: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.json({
        code: 200,
        status: "Success Get All Role",
        data: roles,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addRole: async (req, res) => {
    res.json({
      code: 200,
      status: "Add Role isn't Available",
    });
  },

  getRoleByID: async (req, res) => {
    try {
      const { id } = req.params;
      const roles = await Role.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get A Role",
        data: roles,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteRoleByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Delete Role isn't Available",
    });
  },

  updateRoleByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Update Role isn't Available",
    });
  },
};
