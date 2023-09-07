import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function AllBookings() {
  const [bookings, setBookings] = useState([]);

  const handleDeleteBooking = (bookingId) => {
    // Make an HTTP DELETE request to delete the booking by ID
    axios.delete(`http://localhost:4000/booking/${bookingId}`)
      .then(() => {
        // Remove the deleted booking from the local state
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
      })
      .catch((err) => {
        console.error("Error deleting booking:", err);
      });
  };  
  useEffect(() => {
    // Fetch all booking details when the component mounts
    axios.get("http://localhost:4000/booking")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, []);

    // Function to format ISO date and time to a human-readable format
    const formatDate = (isoDateString) => {
      const dateObject = new Date(isoDateString);
      return dateObject.toLocaleDateString(); // Formats date only
    };

  return (
    <div className="row">
      <div className="col-md-10">
        <h1 className="text-[32px] font-semibold text-center">All Bookings</h1>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-80 ">
          <thead>
            <tr>
              <th className="px-12 py-3 border bg-dark-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">Place</th>
              <th className="px-12 py-3 border bg-dark-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">Check In</th>
              <th className="px-12 py-3 border bg-dark-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">Check Out</th>
              <th className="px-12 py-3 border bg-dark-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">No of People</th>
              <th className="px-12 py-3 border bg-dark-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">Phone No</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="px-12 py-3 border bg-dark-100 text-left 
                   text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">{booking.place}               
                </td>
                <td className="px-12 py-3 border bg-dark-100 text-left 
                 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">{formatDate(booking.checkIn)}   
                </td>
                <td className="px-12 py-3 border bg-dark-100 
                 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">{formatDate(booking.checkOut)}
                </td>
                <td className="px-12 py-3 border bg-dark-100
                 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">{booking.noofPeople}
                </td>
                <td className="px-12 py-3 border bg-dark-100 text-left 
                 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">{booking.phoneNo}
                </td>
                <td className="px-12 py-3 border bg-dark-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wide">
                   <button       
                   className="bg-secondary_500 text-white font-semibold w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-2 text-sm"
                   onClick={() => handleDeleteBooking(booking.id)}>Delete Booking</button>
                   <Link to="/booking/update">
                   <button 
                    className="bg-secondary_500 text-white font-semibold w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-2 text-sm">
                    Update Booking
                    </button>
                    </Link>
                        </td>
              </tr>
            ))}
          </tbody>
        </table>

        {bookings.length > 0 && (
          <h1 className="text-[32px] font-semibold text-center">There are currently  {bookings.length} Bookings for You.</h1>
        )}
      </div>
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
    </div>

  );

}
