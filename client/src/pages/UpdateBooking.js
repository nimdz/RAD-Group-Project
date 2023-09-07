import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function UpdateBooking() {
  const [place, setPlace] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [noofPeople, setNoofPeople] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch booking details by ID and populate the form
    axios.get(`http://localhost:4000/booking/update/${id}`)
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
  }, [id]);

  function updateBooking(e) {
    e.preventDefault();
    const updatedBooking = {
      place,
      checkIn,
      checkOut,
      noofPeople,
      phoneNo,
    };

    // Make a PUT request to update the booking
    axios.put(`http://localhost:4000/booking/update/${id}`, updatedBooking)
      .then(() => {
        alert("Booking Updated");
        navigate("/profile"); // Redirect to the profile page after updating
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="container content-center">
      <form onSubmit={updateBooking}>
        <div className="form-group">
          <h1 className="text-[32px] font-semibold text-center">Update Booking</h1>
          <label htmlFor="place">Place</label>
          <input type="text"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500
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
        <input type="date"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500
            }`}
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkOut">Check-Out</label>
        <input type="date"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500
            }`}
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="noofPeople">Number of People</label>
        <input type="number"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500
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
        <input type="tel"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500
            }`}
          id="phoneNo"
          placeholder="Enter Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
      </div>


  
   
        <div className="form-group">
          <button
            type="submit"
            className="bg-secondary_500 text-white font-semibold w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-4 text-sm"
          >
            Save Changes
          </button>
        </div>
      </form>
      <Link
        to="/booking"
        className="absolute right-0 bottom-0 mr-100 mb-20 text-sm flex items-center"
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
        Back to Booking Page
      </Link>
    </div>
  );
}
