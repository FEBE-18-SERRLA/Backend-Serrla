const Topic = require("../models/topic");
const bcrypt = require("bcrypt");

module.exports = {
  getAllTopic: async (req, res) => {
    try {
      const topics = await Topic.findAll();
      res.json({
        code: 200,
        status: "Success Get All Topic",
        data: topics,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addTopic: async (req, res) => {
    res.json({
      code: 200,
      status: "Add Topic isn't Available",
    });
  },

  getTopicByID: async (req, res) => {
    try {
      const { id } = req.params;
      const topics = await Topic.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get A Topic",
        data: topics,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteTopicByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Add Topic isn't Available",
    });
  },

  updateTopicByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Update Topic isn't Available",
    });
  },
};
