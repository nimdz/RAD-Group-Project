const router = require("express").Router();
let Booking = require("../models/bookings");

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
  let bookingId = req.params.id;
  const{place,checkIn,checkOut,noofPeople,phoneNo}=req.body;

  const updateBooking={
    place,
    checkIn,
    checkOut,
    noofPeople,
    phoneNo
    
  };

  const update = await Booking.findByIdAndUpdate(bookingId,updateBooking)
    .then(() => {
      res.status(200).send({ status: "Booking Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
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

router.route("/get/:id").get(async (req, res) => {
  let bookingId = req.params.id;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).send({ status: "Booking not found" });
    }
    res.status(200).send({ status: "Booking Data Fetched", booking: booking });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with fetching data", error: err.message });
  }
});

module.exports = router;
