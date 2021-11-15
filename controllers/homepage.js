const express = require("express");

const router = express.Router();
const auth = require("../middleware/auth");
const Meals = require("../models/meal");
router.get("/", auth, async (req, res) => {
  const mealList = await Meals.find({ linkId: req.user._id });
  res.json(mealList);
});

router.post("/", auth, async (req, res) => {
  const meal = await new Meals({
    title: req.body.title,
    description: req.body.description,
    calories: req.body.calories,
    linkId: req.user._id,
  });
  meal.save();
  res.send(meal);
});

module.exports = router;
