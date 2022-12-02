const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifytoken");

const userRouter = require("./user.router");
const schoolRouter = require("./school.router");
const roleRouter = require("./role.router");
const eventRouter = require("./event.router");
const articleRouter = require("./article.router");
const topicRouter = require("./topic.router");
const courseRouter = require("./course.router");
const testimoniRouter = require("./testimoni.router");
const statusRouter = require("./status.router");
const trackRouter = require("./track.router");
const instructureRouter = require("./instructure.router");
const authRouter = require("./auth.router");

router.use("/users", userRouter); // favorite, portofolio, start_course
router.use("/schools", schoolRouter);
router.use("/roles", roleRouter);
router.use("/events", eventRouter);
router.use("/articles", articleRouter); //article_comment, like
router.use("/topics", topicRouter);
router.use("/courses", courseRouter); // module, review,
router.use("/testimonials", testimoniRouter);
router.use("/statuses", statusRouter);
router.use("/tracks", trackRouter);
router.use("/instructures", instructureRouter);
router.use("/auth", authRouter);

module.exports = router;
