const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.send("Please login");
  console.log(token);
  const verify = jwt.verify(token, "VickyisBrilliant");
  if (!verify) return res.send("Please login");
  console.log(verify);
  const user = await User.findOne({ _id: verify.id });
  if (!user) return res.send("Please login");
  console.log(user);
  req.user = user;
  next();
};

module.exports = authenticate;
