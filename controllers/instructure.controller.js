const Instructure = require("../models/instructure");
const bcrypt = require("bcrypt");

module.exports = {
  getAllInstructure: async (req, res) => {
    try {
      const instructure = await Instructure.findAll();
      res.json({
        code: 200,
        status: "Success Get All Instructure",
        data: instructure,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addInstructure: async (req, res) => {
    try {
      const { name, bio, picture } = req.body;
      const { id } = req.params;
      const instructures = await Instructure.create({ name, bio, picture });

      res.status(200).json({
        code: 200,
        status: "Success Add A Instructure",
        data: instructures,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getInstructureByID: async (req, res) => {
    try {
      const { id } = req.params;
      const instructures = await Instructure.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get An Instructure",
        data: instructures,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteInstructureByID: async (req, res) => {
    try {
      const { id } = req.params;

      await Instructure.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Instructure",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateInstructureByID: async (req, res) => {
    try {
      const { name, bio, picture } = req.body;
      const { id } = req.params;

      await Instructure.update(
        { name, bio, picture },
        {
          where: {
            id,
          },
        }
      );

      const instructures = await Instructure.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Instructure",
        data: instructures,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};
