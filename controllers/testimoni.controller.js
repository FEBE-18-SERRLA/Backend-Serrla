const Testimoni = require("../models/testimoni");
const bcrypt = require("bcrypt");

module.exports = {
  getAllTestimoni: async (req, res) => {
    try {
      const testimonis = await Testimoni.findAll();
      res.json({
        code: 200,
        status: "Success Get All Testimoni",
        data: testimonis,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addTestimoni: async (req, res) => {
    try {
      const { user_id, testimoni } = req.body;
      const testimonis = await Testimoni.create({ user_id, testimoni });

      res.status(200).json({
        code: 200,
        status: "Success Add A Testimoni",
        data: testimonis,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getTestimoniByID: async (req, res) => {
    try {
      const { id } = req.params;
      const testimonis = await Testimoni.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get A Testimoni",
        data: testimonis,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteTestimoniByID: async (req, res) => {
    try {
      const { id } = req.params;

      await Testimoni.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Testimoni",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateTestimoniByID: async (req, res) => {
    try {
      const { testimoni, user_id } = req.body;
      const { id } = req.params;

      await Testimoni.update(
        { testimoni, user_id },
        {
          where: {
            id,
          },
        }
      );

      const testimonis = await Testimoni.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Testimoni",
        data: testimonis,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};
