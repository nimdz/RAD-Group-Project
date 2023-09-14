import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddBooking() {
  const [place, setPlace] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [noofPeople, setNoofPeople] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [token, setToken] = useState(""); // State to store the JWT token

  useEffect(() => {
    // Fetch the JWT token from where it's stored (e.g., localStorage or cookies)
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  function sendData(e) {
    e.preventDefault();
    const newBooking = {
      place,
      checkIn,
      checkOut,
      noofPeople,
      phoneNo,
    };

    axios
      .post("/booking/add", newBooking, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
          <h1 className="text-[24px] font-semibold text-center mb-[20px]">
            Add Booking
          </h1>
          <label htmlFor="place" className="text-sm font-semibold">
            Place
          </label>
          <input
            type="text"
            className={`border w-full rounded-md shadow-sm 
          shadow-gray-500 py-2 pl-2 mb-[10px] text-sm  
            }`}
            id="place"
            placeholder="Enter Place Name"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkIn" className="text-sm font-semibold">
            Check-In
          </label>
          <input
            type="date"
            className={`border w-full rounded-md 
           shadow-sm shadow-gray-500 py-2 pl-2 mb-[10px] text-sm 
            }`}
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut" className="text-sm font-semibold">
            Check-Out
          </label>
          <input
            type="date"
            className={`border w-full rounded-md 
          shadow-sm shadow-gray-500 py-2 pl-2 mb-[10px] text-sm 
            }`}
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noofPeople" className="text-sm font-semibold">
            Number of People
          </label>
          <input
            type="number"
            className={`border w-full rounded-md shadow-sm shadow-gray-500 
          py-2 pl-2 mb-[10px] text-sm 
            }`}
            id="noofPeople"
            placeholder="Enter Number of People"
            value={noofPeople}
            onChange={(e) => setNoofPeople(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo" className="text-sm font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            className={`border w-full
           rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mb-[10px] text-sm
            }`}
            id="phoneNo"
            placeholder="Enter Phone Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-secondary_500 text-white font-semibold w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-4 text-sm"
        >
          Create Booking
        </button>
      </form>
    </div>
  );
}
