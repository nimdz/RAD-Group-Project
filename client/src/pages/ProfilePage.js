import React from "react";
import { useParams } from "react-router-dom";
import Users from "../components/Users";
import Profile from "../components/Profile";
import Accommodation from "../components/Accommodation";

export default function ProfilePage() {
  let { subpage } = useParams();

  subpage = subpage ? subpage : "account";

  return (
    <div>
      <div>
        {subpage === "account" && <Profile />}
        {subpage === "users" && <Users />}
        {subpage === "accommodation" && <Accommodation />}
      </div>
    </div>
  );
}
