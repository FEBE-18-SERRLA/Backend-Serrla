const Status = require("../models/status");
const bcrypt = require("bcrypt");

module.exports = {
  getAllStatus: async (req, res) => {
    try {
      const statuses = await Status.findAll();
      res.json({
        code: 200,
        status: "Success Get All Status",
        data: statuses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addStatus: async (req, res) => {
    res.json({
      code: 200,
      status: "Add Status isn't Available",
    });
  },

  getStatusByID: async (req, res) => {
    try {
      const { id } = req.params;
      const statuses = await Status.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get A Status",
        data: statuses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteStatusByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Delete Status isn't Available",
    });
  },

  updateStatusByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Update Status isn't Available",
    });
  },
};
