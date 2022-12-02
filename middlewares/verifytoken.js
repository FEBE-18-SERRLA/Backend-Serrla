require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(400).json({
      status: res.statusCode,
      message: "Access Denied!",
    });
  }

  try {
    const token = auth.split(" ")[1];
    const verified = jwt.verify(token, process.env.KEY);
    req.user = verified;
  } catch (err) {
    return res.status(400).json({
      status: res.statusCode,
      message: "Invalid Token!",
    });
  }
  next();
};

module.exports = verifyToken;
