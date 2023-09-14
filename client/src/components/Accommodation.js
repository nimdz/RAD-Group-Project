import React from "react";
import ProfileNavBar from "../components/ProfileNavBar";
import BG from "../assets/images/profilebg.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AccommodationTable from "../components/AccommodationTable";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function Accommodation() {
  const [userData, setUserData] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const { user } = useContext(UserContext);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/api-accommodation/${user.email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`/api-accommodation/${userData[index].title}`);
      fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = async (updatedAccommodation) => {
    try {
      console.log("id: " + updatedAccommodation._id);
      await axios.put(
        `/api-accommodation/${updatedAccommodation._id}`,
        updatedAccommodation
      );
      fetchUserData();
      setEditingService(null); 
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  useEffect(() => {
    if (user && user.userType === "hotelOwner") {
      fetchUserData();
    }
  }, [user]);

  return (
    <>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <ProfileNavBar />
      <div className="flex justify-center ">
        <Link
          to="/profile/accommodation/new"
          className="flex py-2 px-4 my-5 items-center bg-white shadow-md border rounded-lg text-sm font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new Accommodation
        </Link>
      </div>
      <AccommodationTable
        data={userData}
        onDelete={handleDelete}
        onUpdate={handleUpdate} 
        setEditingService={setEditingService} 
        editingService={editingService}
      />
      <Footer />
    </>
  );
}
