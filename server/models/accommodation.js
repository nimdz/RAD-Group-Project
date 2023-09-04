const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
});

const AccommodationModel = mongoose.model("accommodation", accommodationSchema);

module.exports = AccommodationModel;
