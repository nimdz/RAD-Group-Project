import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateBooking() {
  const navigate = useNavigate();
  const { bookingId } = useParams();

  const [place, setPlace] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [noofPeople, setNoofPeople] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    // Fetch booking details by ID and populate the form
    const token = localStorage.getItem("userToken");

    if (!token) {
      console.error('User is not authenticated. Redirect to login or handle accordingly.');
      return;
    }

    axios
      .get(`/booking/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const bookingData = response.data;
        setPlace(bookingData.place);
        setCheckIn(bookingData.checkIn);
        setCheckOut(bookingData.checkOut);
        setNoofPeople(bookingData.noofPeople);
        setPhoneNo(bookingData.phoneNo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [bookingId]);

  const updateBooking = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");

    if (!token) {
      console.error('User is not authenticated. Redirect to login or handle accordingly.');
      return;
    }

    const updatedBooking = {
      place,
      checkIn,
      checkOut,
      noofPeople,
      phoneNo,
    };

    axios
      .put(`/booking/update/${bookingId}`, updatedBooking, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Booking Updated");
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
    <form onSubmit={updateBooking}>
      <div className="form-group">
      <h1 className="text-[32px] font-semibold text-center">Add Booking</h1>
        <label htmlFor="place">Place</label>
        <input
          type="text"
          className={`border w-full rounded-md shadow-sm 
          shadow-gray-500 py-2 pl-2 mt-6 text-sm  
            }`}
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
          className={`border w-full rounded-md 
           shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm 
            }`}
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
          className={`border w-full rounded-md 
          shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm 
            }`}
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
          className={`border w-full rounded-md shadow-sm shadow-gray-500 
          py-2 pl-2 mt-6 text-sm 
            }`}
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
          className={`border w-full
           rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm
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
        Update Booking
      </button>
      <Link
            to="/profile"
            className="absolute right-0 bottom-0 mr-20 mb-20 text-sm flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Profile Page
            </Link>
      </form>
      </div>
  );
}
