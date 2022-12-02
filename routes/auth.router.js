const express = require("express");
const User = require("../models/user");
const router = express.Router();
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = await User.findAll({
    where: {
      email,
    },
  });

  // kalo email ada
  if (users.length > 0) {
    const passwordInDb = users[0].dataValues.password;
    const checkPwd = bcrypt.compareSync(password, passwordInDb);

    if (checkPwd) {
      const token = jwt.sign(
        {
          id: users[0].dataValues.id,
          role_id: users[0].dataValues.role_id,
        },
        process.env.KEY,
        { expiresIn: "8h" }
      );

      res.json({
        code: 200,
        status: "Success Login",
        data: users[0].dataValues,
        token,
      });
    } else {
      res.status(401).json({
        code: 401,
        status: "Email/password incorrect!",
      });
    }
  }

  // kalo email gaada
  else {
    res.status(401).json({
      code: 401,
      status: "Email/password incorrect!",
    });
  }
});

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password, telp, school_id, role_id, birthdate, picture } = req.body;
  const saltRounds = 10;
  const checkEmail = await User.findAll({
    where: {
      email,
    },
  });

  if (checkEmail.length === 0) {
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const user = await User.create({ picture, first_name, birthdate, school_id, last_name, telp, email, password: hashedPassword, role_id });

    res.status(200).json({
      code: 200,
      status: "Success  Register",
      data: user,
    });
  } else {
    res.status(401).json({
      code: 401,
      status: "Email telah digunakan",
    });
  }
});

module.exports = router;
