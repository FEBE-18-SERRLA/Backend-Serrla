const express = require("express");
const multer = require("multer");
const path = require("path");
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
    Login: "https://serrla-api.up.railway.app/auth/login",
    Register: "https://serrla-api.up.railway.app/auth/register",
    User: "https://serrla-api.up.railway.app/users",
    Favorit: "https://serrla-api.up.railway.app/users/:user_id/favorites/",
    Portofolio: "https://serrla-api.up.railway.app/users/:user_id/portofolios/",
    StartedCourse: "https://serrla-api.up.railway.app/users/:user_id/started_courses/",
    School: "https://serrla-api.up.railway.app/schools",
    Role: "https://serrla-api.up.railway.app/roles",
    Event: "https://serrla-api.up.railway.app/events",
    Article: "https://serrla-api.up.railway.app/articles",
    Comment: "https://serrla-api.up.railway.app/articles/:article_id/comments/",
    Like: "https://serrla-api.up.railway.app/articles/:article_id/likes/",
    Topic: "https://serrla-api.up.railway.app/topics",
    Course: "https://serrla-api.up.railway.app/courses",
    Module: "https://serrla-api.up.railway.app/courses/:course_id/modules/",
    Review: "https://serrla-api.up.railway.app/courses/:course_id/reviews/",
    Testimoni: "https://serrla-api.up.railway.app/testimonials",
    Status: "https://serrla-api.up.railway.app/statuses",
    Track: "https://serrla-api.up.railway.app/tracks",
    Instructure: "https://serrla-api.up.railway.app/instructures",
    StartedTest: "https://serrla-api.up.railway.app/users/:user_id/started_tests",
    Test: "https://serrla-api.up.railway.app/courses/:course_id/tests",
    Question: "https://serrla-api.up.railway.app/courses/:course_id/tests/:test_id/questions",
  })
);

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = null;
// const upload = multer({ storage: fileStorage });

app.use(multer({ storage: fileStorage }).single("picture"));

app.use(cors());
app.use(express.json());
app.use(allRouter);

app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
