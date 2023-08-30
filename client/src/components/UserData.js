import React, { useContext, useState, useEffect } from "react";

import { UserContext } from "../components/UserContext";
import axios from "axios";

export default function UserData() {
  const { user } = useContext(UserContext); // Access the user data from the context

  const [updatedData, setUpdatedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  console.log(user);

  const handleUpdate = async () => {
    try {
      await axios.put(`/api-users/${user.email}`, updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedData({});
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">User Data</h2>
      <div className="mb-4">
        <p>Name: {user.userName}</p>
        <p>Email: {user.email}</p>
        {/* Display other user details here */}
        {isEditing ? (
          <div className="mt-12">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              value={updatedData.fullName || ""}
              className="border mb-4"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, fullName: e.target.value })
              }
            />
            <br />
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              value={updatedData.email || ""}
              className="border mb-4"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, email: e.target.value })
              }
            />
            <br />
            {/* Add input fields for other user details */}
            <button
              onClick={handleUpdate}
              className="bg-secondary_500 px-4 py-1 rounded-lg text-white"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-red-500 ml-2 px-4 py-1 rounded-lg text-white"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-secondary_500 mt-3 px-4 py-1 rounded-lg text-white"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
