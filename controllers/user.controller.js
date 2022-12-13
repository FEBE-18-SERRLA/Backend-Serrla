const User = require("../models/user");
const Favorite = require("../models/favorite");
const StartedCourse = require("../models/start_course");
const StartedTest = require("../models/start_course");
const MyDashboard = require("../models/my_dashboard");
const Portofolio = require("../models/portofolio");
const Course = require("../models/course");
const Event = require("../models/event");
const bcrypt = require("bcrypt");
const School = require("../models/school");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll({
        include: [
          {
            model: School,
          },
        ],
      }); //
      if (users.length > 0) {
        res.json({
          code: 200,
          status: "Success Get All User",
          data: users,
        });
      } else {
        res.json({
          code: 404,
          status: "Not Found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addUser: async (req, res) => {
    try {
      const { first_name, last_name, email, password, telp, school_id, role_id, birthdate, picture, gender } = req.body;
      const saltRounds = 10;
      const checkEmail = await User.findAll({
        where: {
          email,
        },
      });

      if (checkEmail.length === 0) {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const user = await User.create({ picture, gender, first_name, birthdate, school_id, last_name, telp, email, password: hashedPassword, role_id });

        res.status(200).json({
          code: 200,
          status: "Success  Register",
          data: user,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: "Email telah digunakan",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getUserByID: async (req, res) => {
    try {
      const { id } = req.params;
      const users = await User.findByPk(id, {
        include: [
          {
            model: School,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get An User",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteUserByID: async (req, res) => {
    try {
      const { id } = req.params;
      await User.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete An User",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateUserByID: async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, email, password, telp, school_id, birthdate, gender } = req.body;

      console.log(id, first_name, last_name, email, password, telp, school_id, birthdate, gender);
      if (!password) {
        console.log("Password null");
        await User.update(
          { first_name, birthdate, school_id, last_name, telp, email, gender },
          {
            where: {
              id,
            },
          }
        );
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10);
        console.log(password, hashedPassword);
        await User.update(
          { password: hashedPassword },
          {
            where: {
              id,
            },
          }
        );
      }

      const users = await User.findByPk(id);

      res.json({
        code: 200,
        status: "Success Update An User",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllFavorite: async (req, res) => {
    try {
      const { user_id } = req.params;
      const favorites = await Favorite.findAll({
        where: {
          user_id,
        },
        include: [
          {
            model: Event,
          },
          {
            model: User,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Favorite",
        data: favorites,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addFavorite: async (req, res) => {
    try {
      const { event_id } = req.body;
      const { user_id } = req.params;

      const checkData = await Favorite.findAll({
        where: {
          user_id,
          event_id,
        },
      });

      if (checkData.length === 0) {
        const favorites = await Favorite.create({ user_id, event_id });

        res.status(200).json({
          code: 200,
          status: "Success Add A Favorite",
          data: favorites,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: "Favorite Has Been Created",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getFavoriteByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;
      const favorites = await Favorite.findAll({
        where: {
          user_id,
          id,
        },
        include: [
          {
            model: Event,
          },
          {
            model: User,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get A Favorite",
        data: favorites,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteFavoriteByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;

      await Favorite.destroy({
        where: {
          id,
          user_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Favorite",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateFavoriteByID: async (req, res) => {
    res.status(200).json({
      code: 200,
      status: "Update Favorit isn't available",
    });
  },

  getAllPortofolio: async (req, res) => {
    try {
      const { user_id } = req.params;
      const portofolios = await Portofolio.findAll({
        where: {
          user_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Portofolio",
        data: portofolios,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addPortofolio: async (req, res) => {
    try {
      const { title, media, description } = req.body;
      const { user_id } = req.params;
      const portofolios = await Portofolio.create({ user_id, title, media, description });

      res.status(200).json({
        code: 200,
        status: "Success Add A Portofolio",
        data: portofolios,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getPortofolioByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;
      const portofolios = await Portofolio.findAll({
        where: {
          user_id,
          id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get A Portofolio",
        data: portofolios,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deletePortofolioByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;

      await Portofolio.destroy({
        where: {
          id,
          user_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Portofolio",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updatePortofolioByID: async (req, res) => {
    try {
      const { title, description, media } = req.body;
      const { user_id, id } = req.params;

      await Portofolio.update(
        { title, description, media },
        {
          where: {
            id,
            user_id,
          },
        }
      );

      const portofolios = await Portofolio.findAll({
        where: {
          user_id,
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Update A Portofolio",
        data: portofolios,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllStartedCourse: async (req, res) => {
    try {
      const { user_id } = req.params;
      const started_courses = await StartedCourse.findAll({
        where: {
          user_id,
        },
        include: [
          {
            model: User,
          },
          {
            model: Course,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Started Course",
        data: started_courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addStartedCourse: async (req, res) => {
    try {
      const { course_id, status_id } = req.body;
      const { user_id } = req.params;

      const checkData = await StartedCourse.findAll({
        where: {
          user_id,
          course_id,
        },
      });

      if (checkData.length === 0) {
        const started_courses = await StartedCourse.create({ user_id, course_id, status_id });

        res.status(200).json({
          code: 200,
          status: "Success Add A Started Course",
          data: started_courses,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: "Course Has Been Registered",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getStartedCourseByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;
      const started_courses = await StartedCourse.findAll({
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
        ],
      });
      res.json({
        code: 200,
        status: "Success Get A StartedCourse",
        data: started_courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteStartedCourseByID: async (req, res) => {
    res.status(200).json({
      code: 200,
      status: "Delete Started Course is Not Available",
    });
  },

  updateStartedCourseByID: async (req, res) => {
    try {
      const { status_id } = req.body;
      const { user_id, id } = req.params;

      await StartedCourse.update(
        { status_id },
        {
          where: {
            id,
            user_id,
          },
        }
      );

      const started_courses = await StartedCourse.findAll({
        where: {
          user_id,
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Update A Started Course",
        data: started_courses,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllStartedTest: async (req, res) => {
    try {
      const { user_id } = req.params;
      const started_tests = await StartedTest.findAll({
        where: {
          user_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Started Test",
        data: started_tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addStartedTest: async (req, res) => {
    try {
      const { test_id, status_id } = req.body;
      const { user_id } = req.params;

      const checkData = await StartedTest.findAll({
        where: {
          user_id,
          test_id,
        },
      });

      if (checkData.length === 0) {
        const started_tests = await StartedTest.create({ user_id, test_id, status_id });

        res.status(200).json({
          code: 200,
          status: "Success Add A Started Test",
          data: started_tests,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: "Test Has Been Registered",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getStartedTestByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;
      const started_tests = await StartedTest.findAll({
        where: {
          user_id,
          id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get A StartedTest",
        data: started_tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteStartedTestByID: async (req, res) => {
    res.status(200).json({
      code: 200,
      status: "Delete Started Test is Not Available",
    });
  },

  updateStartedTestByID: async (req, res) => {
    try {
      const { status_id } = req.body;
      const { user_id, id } = req.params;

      await StartedTest.update(
        { status_id },
        {
          where: {
            id,
            user_id,
          },
        }
      );

      const started_tests = await StartedTest.findAll({
        where: {
          user_id,
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success  Update A StartedTest",
        data: started_tests,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllMyDashboard: async (req, res) => {
    try {
      const { user_id } = req.params;
      const dashboards = await MyDashboard.findAll({
        where: {
          user_id,
        },
        include: [
          {
            model: Course,
          },
          {
            model: User,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All MyDashboard",
        data: dashboards,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addMyDashboard: async (req, res) => {
    try {
      const { course_id } = req.body;
      const { user_id } = req.params;

      const checkData = await MyDashboard.findAll({
        where: {
          user_id,
          course_id,
        },
      });

      if (checkData.length === 0) {
        const dashboards = await MyDashboard.create({ user_id, course_id });

        res.status(200).json({
          code: 200,
          status: "Success Add A MyDashboard",
          data: dashboards,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: "MyDashboard Has Been Created",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getMyDashboardByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;
      const dashboards = await MyDashboard.findAll({
        where: {
          user_id,
          id,
        },
        include: [
          {
            model: Course,
          },
          {
            model: User,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get A MyDashboard",
        data: dashboards,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteMyDashboardByID: async (req, res) => {
    try {
      const { user_id, id } = req.params;

      await MyDashboard.destroy({
        where: {
          id,
          user_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A MyDashboard",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateMyDashboardByID: async (req, res) => {
    res.status(200).json({
      code: 200,
      status: "Update MyDashboard isn't available",
    });
  },
};
