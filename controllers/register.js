const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { registertime } = require("../validator/validator");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  //Check if email already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.send("Email already exists");
  }

  //For the validation
  const { error } = registertime(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  //for hashing
  const Salt = await bcrypt.genSalt(10);
  const hasshedPassword = await bcrypt.hash(req.body.password, Salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hasshedPassword,
  });
  try {
    await user.save();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
