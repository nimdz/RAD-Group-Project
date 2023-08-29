import React from "react";
import BG from "../assets/images/profilebg.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileNavBar from "../components/ProfileNavBar";

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <div className="flex w-full -mt-10">
        <ProfileNavBar />
      </div>
      <Footer />
    </div>
  );
}
