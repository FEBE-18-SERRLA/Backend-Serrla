const Course = require("../models/course");
const Module = require("../models/module");
const Review = require("../models/review");
const { Op } = require("sequelize");
const Test = require("../models/test");
const Question = require("../models/question");
const Track = require("../models/track");
const bcrypt = require("bcrypt");
const Instructure = require("../models/instructure");
const User = require("../models/user");

module.exports = {
  getAllCourse: async (req, res) => {
    try {
      const courses = await Course.findAll({
        include: [
          {
            model: Track,
          },
          {
            model: Module,
          },
          {
            model: Test,
          },
          {
            model: Instructure,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Course",
        data: courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  searchCourse: async (req, res) => {
    try {
      const { keyword } = req.query;
      console.log(keyword);
      const courses = await Course.findAll({
        where: {
          name: {
            [Op.or]: {
              [Op.like]: "%" + keyword + "%",
            },
          },
        },
        include: [
          {
            model: Track,
          },
          {
            model: Module,
          },
          {
            model: Test,
          },
          {
            model: Instructure,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Course",
        data: courses,
      });
    } catch (error) {}
  },

  filterCourse: async (req, res) => {
    try {
      const { track } = req.query;
      console.log(track);
      if (track == "all") {
        try {
          const courses = await Course.findAll({
            include: [
              {
                model: Track,
              },
              {
                model: Module,
              },
              {
                model: Test,
              },
              {
                model: Instructure,
              },
            ],
          });
          res.json({
            code: 200,
            status: "Success Get All Course",
            data: courses,
          });
        } catch (error) {
          res.status(500).json({
            message: "server error",
            error: error.message,
          });
        }
      } else {
        const courses = await Course.findAll({
          where: {
            track_id: {
              [Op.or]: {
                [Op.eq]: track,
              },
            },
          },
          include: [
            {
              model: Track,
            },
            {
              model: Module,
            },
            {
              model: Test,
            },
            {
              model: Instructure,
            },
          ],
        });
        res.json({
          code: 200,
          status: "Success Get All Course",
          data: courses,
        });
      }
    } catch (error) {}
  },

  addCourse: async (req, res) => {
    try {
      const { name, description, image, track_id, instructure_id, exp_point } = req.body;
      const courses = await Course.create({ name, description, image, track_id, instructure_id, exp_point });

      res.status(200).json({
        code: 200,
        status: "Success Add A Course",
        data: courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getCourseByID: async (req, res) => {
    try {
      const { id } = req.params;
      const courses = await Course.findByPk(id, {
        include: [
          {
            model: Track,
          },
          {
            model: Module,
          },
          {
            model: Test,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get A Course",
        data: courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteCourseByID: async (req, res) => {
    try {
      const { id } = req.params;

      await Course.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Course",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateCourseByID: async (req, res) => {
    try {
      const { name, description, image, track_id, instructure_id, exp_point } = req.body;
      const { id } = req.params;

      await Course.update(
        { name, description, image, track_id, instructure_id, exp_point },
        {
          where: {
            id,
          },
        }
      );

      const courses = await Course.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Course",
        data: courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllReview: async (req, res) => {
    try {
      const { course_id } = req.params;
      const reviews = await Review.findAll({
        where: {
          course_id,
        },
        include: [
          {
            model: User,
          },
          {
            model: Course,
          },
          {
            model: Instructure,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Review",
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addReview: async (req, res) => {
    try {
      const { user_id, star, review } = req.body;
      const { course_id } = req.params;
      const reviews = await Review.create({ user_id, star, review, course_id });

      res.status(200).json({
        code: 200,
        status: "Success Add A Review",
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getReviewByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;
      const reviews = await Review.findAll({
        where: {
          user_id,
          id,
        },
        include: [
          {
            model: User,
          },
          {
            model: Course,
          },
          {
            model: Instructure,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get A Review",
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteReviewByID: async (req, res) => {
    try {
      const { course_id, id } = req.params;

      await Review.destroy({
        where: {
          id,
          course_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Review",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateReviewByID: async (req, res) => {
    try {
      const { star, review } = req.body;
      const { id, course_id } = req.params;

      await Review.update(
        { star, review },
        {
          where: {
            id,
            course_id,
          },
        }
      );

      const reviews = await Review.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Review",
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllModule: async (req, res) => {
    try {
      const { course_id } = req.params;
      const modules = await Module.findAll({
        where: {
          course_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Module",
        data: modules,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addModule: async (req, res) => {
    try {
      const { title, video, image, description } = req.body;
      const { course_id } = req.params;
      const modules = await Module.create({ title, video, image, description, course_id });

      res.status(200).json({
        code: 200,
        status: "Success Add A Module",
        data: modules,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getModuleByID: async (req, res) => {
    try {
      const { id, course_id } = req.params;
      const modules = await Module.findAll({
        where: {
          course_id,
          id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get A Module",
        data: modules,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteModuleByID: async (req, res) => {
    try {
      const { course_id, id } = req.params;

      await Module.destroy({
        where: {
          id,
          course_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Module",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateModuleByID: async (req, res) => {
    try {
      const { title, video, image, description } = req.body;
      const { id, course_id } = req.params;

      await Module.update(
        { title, video, image, description },
        {
          where: {
            id,
            course_id,
          },
        }
      );

      const modules = await Module.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Module",
        data: modules,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllTest: async (req, res) => {
    try {
      const { course_id } = req.params;
      const tests = await Test.findAll({
        where: {
          course_id,
        },
        include: [
          {
            model: Question,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Test",
        data: tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getTestByID: async (req, res) => {
    try {
      const { id, course_id } = req.params;
      const tests = await Test.findAll({
        where: {
          course_id,
          id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get A Test",
        data: tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addTest: async (req, res) => {
    try {
      const { description } = req.body;
      const { course_id } = req.params;
      const tests = await Test.create({ course_id, description });

      res.status(200).json({
        code: 200,
        status: "Success Add A Test",
        data: tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateTestByID: async (req, res) => {
    try {
      const { description } = req.body;
      const { course_id, id } = req.params;

      await Test.update(
        { description },
        {
          where: {
            id,
            course_id,
          },
        }
      );

      const tests = await Test.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Test",
        data: tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteTestByID: async (req, res) => {
    try {
      const { course_id, id } = req.params;

      await Test.destroy({
        where: {
          id,
          course_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Test",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllQuestion: async (req, res) => {
    try {
      const { test_id } = req.params;
      const questions = await Question.findAll({
        where: {
          test_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Question",
        data: questions,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getQuestionByID: async (req, res) => {
    try {
      const { test_id, id } = req.params;
      const questions = await Question.findAll({
        where: {
          id,
          test_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get A Question",
        data: questions,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addQuestion: async (req, res) => {
    try {
      const { a, b, c, d, answer_key, question, image } = req.body;
      const { test_id } = req.params;
      const questions = await Question.create({ image, a, b, c, d, answer_key, question, test_id });

      res.status(200).json({
        code: 200,
        status: "Success Add A Question",
        data: questions,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateQuestionByID: async (req, res) => {
    try {
      const { test_id, id } = req.params;
      const { question, image, a, b, c, d, answer_key } = req.body;

      await Question.update(
        { question, image, a, b, c, d, answer_key },
        {
          where: {
            test_id,
            id,
          },
        }
      );

      const questions = await Question.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Question",
        data: questions,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteQuestionByID: async (req, res) => {
    try {
      const { test_id, id } = req.params;

      await Question.destroy({
        where: {
          test_id,
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Question",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};
