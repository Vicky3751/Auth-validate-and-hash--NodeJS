const express = require("express");

const router = express.Router();
const { logintime } = require("../validator/validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  //for checking if email exists or not
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send("Invalid Email");
  }

  //For the validation
  const { error } = logintime(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  //password validation
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.send("invalid password");
  }

  //jwt
  const token = await jwt.sign({ id: user._id }, "VickyisBrilliant");
  res.header("auth-token", token);
  res.cookie("jwt", token);

  try {
    res.send("logged In");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
