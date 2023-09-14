import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import ProfileNavBar from "./ProfileNavBar";
import BG from "../assets/images/profilebg.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ReviewTable from "./ReviewTable";

export default function Review() {
  const [userData, setUserData] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const { user } = useContext(UserContext);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/api-review/${user.email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`/api-review/${userData[index].title}`);
      fetchUserData();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleUpdate = async (updatedReview) => {
    try {
      await axios.put(`/api-review/${updatedReview._id}`, updatedReview);
      fetchUserData();
      setEditingReview(null); // Clear the editing state after successful update
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  });

  return (
    <>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <ProfileNavBar />

      <ReviewTable
        data={userData}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        editingService={editingReview}
        setEditingService={setEditingReview}
      />
      <Footer />
    </>
  );
}
