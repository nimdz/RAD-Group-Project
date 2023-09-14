import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import CheckOutBar from "../components/CheckOutBar";
import BG from "../assets/images/homebg.jpg";
import Footer from "../components/Footer";

export default function HotelPage() {
  const [hotels, setHotels] = useState([]);

  const defaultURL = "http://localhost:4000/";

  useEffect(() => {
    axios.get("/accommodation").then(({ data }) => {
      setHotels(data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <div className="flex w-full -mt-10">
        <CheckOutBar />
      </div>
      <div className="pt-[40px] flex flex-wrap justify-center mb-[30px] mx-[0px] xl:mx-[100px]">
        {hotels.length > 0 &&
          hotels.map((hotel) => (
            <Link
              key={hotel}
              className="flex justify-center rounded-lg w-[260px] mb-[30px]"
              to={`/hotel/${hotel._id}`}
            >
              <div className="flex-col bg-gray-100 rounded-lg h-[300px] w-[250px]">
                {hotel.photos.length > 0 && (
                  <div className="h-[190px]">
                    <img
                      className="h-full w-full object-cover overflow-hidden rounded-t-lg"
                      src={defaultURL + "uploads/" + hotel.photos[0]}
                      alt="hotel"
                    />
                  </div>
                )}
                <div className="content w-full h-[100px] mt-[3px] mx-[10px]">
                  <div className="h-1/4">
                    <h1 className="truncate-2-lines text-[16px] font-semibold">
                      {hotel.title}
                    </h1>
                  </div>
                  <div className="h-2/4">
                    <h2 className="truncate-2-lines text-[12px]">
                      {hotel.address}
                    </h2>
                  </div>
                  <div className="h-1/4 text-[14px] font-semibold">
                    <h3>Per night: ${hotel.price}.00</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
}
