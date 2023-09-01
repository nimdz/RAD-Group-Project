import React from "react";
import ProfileNavBar from "../components/ProfileNavBar";
import BG from "../assets/images/profilebg.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Accommodation() {
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
        <div className="flex-col"></div>
      </div>
      <Footer />
    </>
  );
}
