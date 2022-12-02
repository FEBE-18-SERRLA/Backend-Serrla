const School = require("../models/school");
const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  getAllSchool: async (req, res) => {
    try {
      const schools = await School.findAll();
      res.json({
        code: 200,
        status: "Success Get All School",
        data: schools,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addSchool: async (req, res) => {
    try {
      const { npsn, name, address, telp } = req.body;
      const schools = await School.create({ npsn, name, address, telp });

      res.status(200).json({
        code: 200,
        status: "Success Add A School",
        data: schools,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getSchoolByID: async (req, res) => {
    try {
      const { id } = req.params;
      const schools = await School.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get A School",
        data: schools,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteSchoolByID: async (req, res) => {
    try {
      const { id } = req.params;

      await School.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A School",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateSchoolByID: async (req, res) => {
    try {
      const { npsn, name, address, telp } = req.body;
      const { id } = req.params;

      await School.update(
        { npsn, name, address, telp },
        {
          where: {
            id,
          },
        }
      );

      const schools = await School.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A School",
        data: schools,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};
