const express = require("express");
const router = express.Router();

const {
  getAllArticle,
  addArticle,
  deleteArticleByID,
  getArticleByID,
  updateArticleByID,
  getAllComment,
  addComment,
  deleteCommentByID,
  getCommentByID,
  updateCommentByID,
  getAllLike,
  addLike,
  deleteLikeByID,
  getLikeByID,
  updateLikeByID,
} = require("../controllers/article.controller");

router.get("/", getAllArticle);
router.get("/:id", getArticleByID);
router.post("/", addArticle);
router.put("/:id", updateArticleByID);
router.delete("/:id", deleteArticleByID);

router.get("/:article_id/comments/", getAllComment);
router.get("/:article_id/comments/:id", getCommentByID);
router.post("/:article_id/comments/", addComment);
router.put("/:article_id/comments/:id", updateCommentByID);
router.delete("/:article_id/comments/:id", deleteCommentByID);

router.get("/:article_id/likes/", getAllLike);
router.get("/:article_id/likes/:id", getLikeByID);
router.post("/:article_id/likes/", addLike);
router.put("/:article_id/likes/:id", updateLikeByID);
router.delete("/:article_id/likes/:id", deleteLikeByID);

module.exports = router;
