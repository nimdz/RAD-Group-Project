import React from "react";
import ProfileNavBar from "../components/ProfileNavBar";
import UserTable from "../components/UserTable";
import BG from "../assets/images/profilebg.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api-users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user && user.userType === "admin") {
      fetchUserData();
    }
  }, [user]);

  const handleDelete = async (email) => {
    try {
      await axios.delete(`/api-users/${email}`);
      fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <ProfileNavBar />
      <UserTable data={userData} onDelete={handleDelete} />
      <Footer />
    </>
  );
}
