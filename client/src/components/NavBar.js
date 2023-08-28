import Logo from "../assets/Logo_1.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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
        <Link to="/signup" className="mr-4 text-white">
          Register
        </Link>
        <button className="bg-secondary_500 px-4 py-1 rounded-lg text-white">
          <Link to="/login">Sign In</Link>
        </button>
      </div>
    </div>
  );
}
