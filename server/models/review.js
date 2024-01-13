const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  email: String,
  title: String,
  description: String,
});

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;
