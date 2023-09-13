import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";
import ProfileNavBar from "./ProfileNavBar";
import BG from "../assets/images/profilebg.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ServiceTable from "./ServiceTable";

export default function Service() {
  const [userData, setUserData] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const { user } = useContext(UserContext);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/api-service/${user.email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`/api-service/${userData[index].title}`);
      fetchUserData();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleUpdate = async (updatedService) => {
    try {
      console.log("id: " + updatedService._id);
      await axios.put(`/api-service/${updatedService._id}`, updatedService);
      fetchUserData();
      setEditingService(null); // Clear the editing state after successful update
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  useEffect(() => {
    if (user && user.userType === "admin") {
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
          to="/profile/service/new"
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
          Add new Facility
        </Link>
      </div>
      <ServiceTable
        data={userData}
        onDelete={handleDelete}
        onUpdate={handleUpdate} // Pass the handleUpdate function to ServiceTable
        setEditingService={setEditingService} // Pass a state updater for editing
        editingService={editingService} // Pass the currently editing service
      />
      <Footer />
    </>
  );
}
