const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "Unauthorized",
    });
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(verified.user.id);

    if (user.role_id !== 1) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
  return next();
};

module.exports = auth;
