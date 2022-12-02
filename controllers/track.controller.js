const Track = require("../models/track");
const bcrypt = require("bcrypt");

module.exports = {
  getAllTrack: async (req, res) => {
    try {
      const tracks = await Track.findAll();
      res.json({
        code: 200,
        status: "Success Get All Track",
        data: tracks,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addTrack: async (req, res) => {
    res.json({
      code: 200,
      status: "Add Track isn't Available",
    });
  },

  getTrackByID: async (req, res) => {
    try {
      const { id } = req.params;
      const tracks = await Track.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get A Track",
        data: tracks,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteTrackByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Delete Track isn't Available",
    });
  },

  updateTrackByID: async (req, res) => {
    res.json({
      code: 200,
      status: "Update Track isn't Available",
    });
  },
};
