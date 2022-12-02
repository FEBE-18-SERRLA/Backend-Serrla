const Article = require("../models/article");
const Comment = require("../models/article_comment");
const Like = require("../models/like");
const User = require("../models/user");
const Topic = require("../models/topic");
const bcrypt = require("bcrypt");

module.exports = {
  getAllArticle: async (req, res) => {
    try {
      const articles = await Article.findAll({
        include: [
          {
            model: User,
          },
          {
            model: Topic,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get All Article",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addArticle: async (req, res) => {
    try {
      const { user_id, title, description, topic_id } = req.body;
      const articles = await Article.create({ user_id, title, description, topic_id });

      res.status(200).json({
        code: 200,
        status: "Success Add An Article",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getArticleByID: async (req, res) => {
    try {
      const { id } = req.params;
      const articles = await Article.findByPk(id, {
        include: [
          {
            model: User,
          },
          {
            model: Topic,
          },
        ],
      });
      res.json({
        code: 200,
        status: "Success Get An Article",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteArticleByID: async (req, res) => {
    try {
      const { id } = req.params;

      await Article.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete An Article",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateArticleByID: async (req, res) => {
    try {
      const { title, description, topic_id } = req.body;
      const { id } = req.params;

      await Article.update(
        { title, description, topic_id },
        {
          where: {
            id,
          },
        }
      );

      const articles = await Article.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Article",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllComment: async (req, res) => {
    try {
      const { article_id } = req.params;
      const comments = await Comment.findAll({
        where: {
          article_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Comment",
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addComment: async (req, res) => {
    try {
      const { article_id } = req.params;
      const { user_id, comment } = req.body;
      const comments = await Comment.create({ user_id, article_id, comment });

      res.status(200).json({
        code: 200,
        status: "Success Add A Comment",
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getCommentByID: async (req, res) => {
    try {
      const { article_id, id } = req.params;
      const comments = await Comment.findAll({
        where: {
          id,
          article_id,
        },
      });

      res.json({
        code: 200,
        status: "Success Get A Comment",
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteCommentByID: async (req, res) => {
    try {
      const { id, article_id } = req.params;

      await Comment.destroy({
        where: {
          id,
          article_id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Comment",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateCommentByID: async (req, res) => {
    try {
      const { comment } = req.body;
      const { id, article_id } = req.params;

      await Comment.update(
        { comment },
        {
          where: {
            id,
            article_id,
          },
        }
      );

      const comments = await Comment.findByPk(id);

      res.status(200).json({
        code: 200,
        status: "Success Update A Comment",
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getAllLike: async (req, res) => {
    try {
      const { article_id } = req.params;
      const likes = await Like.findAll({
        where: {
          article_id,
        },
      });
      res.json({
        code: 200,
        status: "Success Get All Like",
        data: likes,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  addLike: async (req, res) => {
    try {
      const { article_id } = req.params;
      const { user_id } = req.body;

      const checkData = await Favorite.findAll({
        where: {
          user_id,
          event_id,
        },
      });

      if (checkData.length === 0) {
        const likes = await Like.create({ user_id, article_id });

        res.status(200).json({
          code: 200,
          status: "Success Add A Like",
          data: likes,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: "Like Has Been Added",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getLikeByID: async (req, res) => {
    try {
      const { article_id, id } = req.params;
      const likes = await Like.findAll({
        where: {
          article_id,
          id,
        },
      });

      res.json({
        code: 200,
        status: "Success Get A Like",
        data: likes,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  deleteLikeByID: async (req, res) => {
    try {
      const { article_id, id } = req.params;

      await Like.destroy({
        where: {
          article_id,
          id,
        },
      });

      res.status(200).json({
        code: 200,
        status: "Success Delete A Like",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  updateLikeByID: async (req, res) => {
    try {
      res.status(200).json({
        code: 200,
        status: "Update Like isn't Available",
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};
