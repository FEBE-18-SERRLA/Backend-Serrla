const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db.config.js");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3200;
const allRouter = require("./routes");

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("error"));

app.get("/", (req, res) =>
  res.json({
    Login: "https://tesbe-production.up.railway.app/auth/login",
    Register: "https://tesbe-production.up.railway.app/auth/register",
    User: "https://tesbe-production.up.railway.app/users",
    Favorit: "https://tesbe-production.up.railway.app/users/:user_id/favorites/",
    Portofolio: "https://tesbe-production.up.railway.app/users/:user_id/portofolios/",
    StartedCourse: "https://tesbe-production.up.railway.app/users/:user_id/started_courses/",
    School: "https://tesbe-production.up.railway.app/schools",
    Role: "https://tesbe-production.up.railway.app/roles",
    Event: "https://tesbe-production.up.railway.app/events",
    Article: "https://tesbe-production.up.railway.app/articles",
    Comment: "https://tesbe-production.up.railway.app/articles/:article_id/comments/",
    Like: "https://tesbe-production.up.railway.app/articles/:article_id/likes/",
    Topic: "https://tesbe-production.up.railway.app/topics",
    Course: "https://tesbe-production.up.railway.app/courses",
    Module: "https://tesbe-production.up.railway.app/courses/:course_id/modules/",
    Review: "https://tesbe-production.up.railway.app/courses/:course_id/reviews/",
    Testimoni: "https://tesbe-production.up.railway.app/testimonials",
    Status: "https://tesbe-production.up.railway.app/statuses",
    Track: "https://tesbe-production.up.railway.app/tracks",
    Instructure: "https://tesbe-production.up.railway.app/instructures",
    StartedTest: "https://tesbe-production.up.railway.app/users/:user_id/started_tests",
    Test: "https://tesbe-production.up.railway.app/courses/:course_id/tests",
    Question: "https://tesbe-production.up.railway.app/courses/:course_id/tests/:test_id/questions",
  })
);

app.use(cors());
app.use(express.json());
app.use(allRouter);

app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
