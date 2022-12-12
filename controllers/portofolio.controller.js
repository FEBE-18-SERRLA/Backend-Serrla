const { Op } = require("sequelize");
const User = require("../models/user");
const Portofolio = require("../models/portofolio");

module.exports = {
  getAllPortofolio: async (req, res) => {
    try {
      const portofolios = await Portofolio.findAll();
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

  searchPortofolio: async (req, res) => {
    try {
      const { keyword } = req.query;
      console.log(keyword);
      if (keyword === "all") {
        const portofolios = await Portofolio.findAll({
          where: {
            name: {
              [Op.or]: {
                [Op.like]: "%" + keyword + "%",
              },
            },
          },
          include: [
            {
              model: User,
            },
          ],
        });
        res.json({
          code: 200,
          status: "Success Get All Portofolio",
          data: portofolios,
        });
      } else {
        const portofolios = await Portofolio.findAll({
          where: {
            name: {
              [Op.or]: {
                [Op.like]: "%" + keyword + "%",
              },
            },
          },
          include: [
            {
              model: User,
            },
          ],
        });
        res.json({
          code: 200,
          status: "Success Get All Portofolio",
          data: portofolios,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  //   filterPortofolio: async (req, res) => {
  //     try {
  //       const { track } = req.query;
  //       console.log(track);
  //       if (track == "all") {
  //         try {
  //           const portofolios = await Portofolio.findAll({
  //             include: [
  //               {
  //                 model: Track,
  //               },
  //             ],
  //           });
  //           res.json({
  //             code: 200,
  //             status: "Success Get All Portofolio",
  //             data: portofolios,
  //           });
  //         } catch (error) {
  //           res.status(500).json({
  //             message: "server error",
  //             error: error.message,
  //           });
  //         }
  //       } else {
  //         const portofolios = await Portofolio.findAll({
  //           where: {
  //             track_id: {
  //               [Op.or]: {
  //                 [Op.eq]: track,
  //               },
  //             },
  //           },
  //           include: [
  //             {
  //               model: User,
  //             },
  //           ],
  //         });
  //         res.json({
  //           code: 200,
  //           status: "Success Get All Portofolio",
  //           data: portofolios,
  //         });
  //       }
  //     } catch (error) {}
  //   },
};
