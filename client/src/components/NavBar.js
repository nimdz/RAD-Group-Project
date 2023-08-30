import Logo from "../assets/Logo_1.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext"; // Import UserContext

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, setUser } = useContext(UserContext); // Get the user object from the context

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleLogout = () => {
    // Clear the user data from the context and perform any additional logout tasks
    setUser(null);
    // You might want to add an API call to logout on the server side as well

    // Optionally, navigate to the home page or another appropriate page
    // For example, if you're using react-router-dom:
    // history.push("/");
    localStorage.setItem("userToken", "");
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex justify-between items-center w-full px-[50px] lg:px-[100px] h-[60px] ${
        isScrolled ? "bg-primary_400" : "bg-transparent"
      }`}
    >
      <img src={Logo} className="h-[50px] " alt="logo" />
      <div>
        <Link className="mr-4 2xl:mr-8 text-white" to="/">
          Home
        </Link>
        <Link className="mr-4 2xl:mr-8 text-white">Hotels</Link>
        <Link className="mr-4 2xl:mr-8 text-white">Services</Link>
        <Link className="mr-4 2xl:mr-8 text-white">Contact Us</Link>
      </div>
      <div>
        {user ? (
          <div className="flex items-center">
            <Link className="text-white mr-4" to="/profile">
              Hello, {user.userName}
            </Link>
            <button
              className="bg-secondary_500 px-4 py-1 rounded-lg text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signup" className="mr-4 text-white">
              Register
            </Link>
            <button className="bg-secondary_500 px-4 py-1 rounded-lg text-white">
              <Link to="/login">Sign In</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
