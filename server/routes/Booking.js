const router = require("express").Router();
const jwt = require("jsonwebtoken");
const secretKey = "AABSCFGHEJISJODUasdiu";
let Booking = require("../models/bookings");
const mongoose = require("mongoose"); 

router.route("/add").post((req, res) => {
  
  const{place,checkIn,checkOut,noofPeople,phoneNo}=req.body;

  const newBooking = new Booking({
    place,
    checkIn,
    checkOut,
    noofPeople,
    phoneNo
    
  });

  newBooking.save()
    .then(() => {
      res.json("Booking Added");
    }).catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Booking.find()
    .then((bookings) => {
      res.json(bookings);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  const bookingId = req.params.id;
  const updateBooking = req.body;

  try {
    // Update the booking by ID
    await Booking.findByIdAndUpdate(bookingId, updateBooking);
    res.status(200).json({ status: "Booking updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Error with updating data" });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let bookingId = req.params.id;

  await Booking.findByIdAndDelete(bookingId)
    .then(() => {
      res.status(200).send({ status: "Booking Data Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});


module.exports = router;
