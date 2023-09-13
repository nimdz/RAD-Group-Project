const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  email: String,
  title: String,
  photos: [String],
  description: String,
});

const ServiceModel = mongoose.model("Service", serviceSchema);

module.exports = ServiceModel;
