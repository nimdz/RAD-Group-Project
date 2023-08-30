import React, { useState } from "react";
import axios from "axios";

export default function AddBooking() {
  const [place, setPlace] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [noofPeople, setNoofPeople] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newBooking = {
      place,
      checkIn,
      checkOut,
      noofPeople,
      phoneNo,
    };

    axios.post("http://localhost:4000/booking/add", newBooking)
      .then(() => {
        alert("Booking Added");
        // Clear the form fields after successful submission
        setPlace("");
        setCheckIn("");
        setCheckOut("");
        setNoofPeople("");
        setPhoneNo("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            className="form-control"
            id="place"
            placeholder="Enter Place Name"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkIn">Check-In</label>
          <input
            type="date"
            className="form-control"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-Out</label>
          <input
            type="date"
            className="form-control"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noofPeople">Number of People</label>
          <input
            type="number"
            className="form-control"
            id="noofPeople"
            placeholder="Enter Number of People"
            value={noofPeople}
            onChange={(e) => setNoofPeople(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNo"
            placeholder="Enter Phone Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
