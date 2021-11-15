const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  calories: {
    type: Number,
  },
  linkId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

var meal = mongoose.model("Meal", mealSchema);

module.exports = meal;
