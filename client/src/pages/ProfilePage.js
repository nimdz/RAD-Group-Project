import React from "react";
import { useParams } from "react-router-dom";
import Users from "../components/Users";
import Profile from "../components/Profile";
import Accommodation from "../components/Accommodation";
import AdminAccommodation from "../components/AdminAccommodation";

export default function ProfilePage() {
  let { subpage } = useParams();

  subpage = subpage ? subpage : "account";

  return (
    <div>
      <div>
        {subpage === "account" && <Profile />}
        {subpage === "users" && <Users />}
        {subpage === "accommodation" && <Accommodation />}
        {subpage === "admin_accommodation" && <AdminAccommodation />}
      </div>
    </div>
  );
}
