const Event = require("../models/event");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  getAllEvent: async (req, res) => {
    try {
      const events = await Event.findAll({
        where: {
          date: {
            [Op.or]: {
              [Op.gte]: "2022-12-21",
            },
          },
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Event",
        data: events,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  searchEvent: async (req, res) => {
    try {
      const { keyword } = req.query;
      console.log(keyword);
      const events = await Event.findAll({
        where: {
          name: {
            [Op.or]: {
              [Op.like]: "%" + keyword + "%",
            },
          },
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Event",
        data: events,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addEvent: async (req, res) => {
    try {
      const { name, description, image, date, time, location, loc_url, price } = req.body;
      const events = await Event.create({ name, description, image, date, time, location, loc_url, price });

      res.status(200).json({
        code: 200,
        status: "Success Add A Event",
        data: events,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getEventByID: async (req, res) => {
    try {
      const { id } = req.params;
      const events = await Event.findByPk(id);
      res.json({
        code: 200,
        status: "Success Get An Event",
        data: events,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteEventByID: async (req, res) => {
    try {
      const { id } = req.params;

      await Event.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Event",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateEventByID: async (req, res) => {
    try {
      const { name, description, image, date, time, location, loc_url, price } = req.body;
      const { id } = req.params;

      await Event.update(
        { name, description, image, date, time, location, loc_url, price },
        {
          where: {
            id,
          },
        }
      );

      const events = await Event.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Event",
        data: events,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};
