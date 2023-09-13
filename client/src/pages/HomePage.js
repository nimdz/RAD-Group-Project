import BG from "../assets/images/homebg.jpg";

import NavBar from "../components/NavBar";
import CheckOutBar from "../components/CheckOutBar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HotelSlider from "../components/HotelSlider";
import ServiceSlider from "../components/ServiceSlider";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <div className="flex w-full -mt-10">
        <CheckOutBar />
      </div>
      <div className="w-full flex-col justify-center mt-10 text-[20px] text-center font-semibold">
        <h1>Featured Hotels</h1>
        <HotelSlider />
      </div>
      <div className="w-full justify-start mt-20  px-[50px] lg:px-[100px]">
        <h1 className="text-[20px] font-semibold">Facilities & Services</h1>
        <p className="text-sm w-3/5">
          Experience comfort and convenience with our hotel's private
          workspaces, ampling parking area, complimentary Wi-Fi, and daily
          breakfast offerings etc.
        </p>
        <ServiceSlider />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
