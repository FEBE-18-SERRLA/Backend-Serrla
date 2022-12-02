const express = require("express");
const router = express.Router();

const {
  getAllCourse,
  searchCourse,
  filterCourse,
  addCourse,
  deleteCourseByID,
  getCourseByID,
  updateCourseByID,
  getAllModule,
  addModule,
  deleteModuleByID,
  getModuleByID,
  updateModuleByID,
  getAllReview,
  addReview,
  deleteReviewByID,
  getReviewByID,
  updateReviewByID,
  getAllTest,
  addTest,
  deleteTestByID,
  getTestByID,
  updateTestByID,
  getAllQuestion,
  addQuestion,
  deleteQuestionByID,
  getQuestionByID,
  updateQuestionByID,
} = require("../controllers/course.controller");

router.get("/", getAllCourse);
router.get("/search", searchCourse);
router.get("/filter", filterCourse);
router.get("/:id", getCourseByID);
router.post("/", addCourse);
router.put("/:id", updateCourseByID);
router.delete("/:id", deleteCourseByID);

router.get("/:course_id/modules/", getAllModule);
router.get("/:course_id/modules/:id", getModuleByID);
router.post("/:course_id/modules/", addModule);
router.put("/:course_id/modules/:id", updateModuleByID);
router.delete("/:course_id/modules/:id", deleteModuleByID);

router.get("/:course_id/reviews/", getAllReview);
router.get("/:course_id/reviews/:id", getReviewByID);
router.post("/:course_id/reviews/", addReview);
router.put("/:course_id/reviews/:id", updateReviewByID);
router.delete("/:course_id/reviews/:id", deleteReviewByID);

router.get("/:course_id/tests/", getAllTest);
router.get("/:course_id/tests/:id", getTestByID);
router.post("/:course_id/tests/", addTest);
router.put("/:course_id/tests/:id", updateTestByID);
router.delete("/:course_id/tests/:id", deleteTestByID);

router.get("/:course_id/tests/:test_id/questions", getAllQuestion);
router.get("/:course_id/tests/:test_id/questions/:id", getQuestionByID);
router.post("/:course_id/tests/:test_id/questions", addQuestion);
router.put("/:course_id/tests/:test_id/questions/:id", updateQuestionByID);
router.delete("/:course_id/tests/:test_id/questions/:id", deleteQuestionByID);

module.exports = router;
