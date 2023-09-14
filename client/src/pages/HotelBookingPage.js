import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../components/AddressLink";
import NavBar from "../components/NavBar";
import BG from "../assets/images/profilebg.jpg";
import CheckOutBar from "../components/CheckOutBar";
import ReviewForm from "../components/ReviewForm";
import Footer from "../components/Footer";
import AddBooking from "./AddBooking";

export default function HotelBookingPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const defaultURL = "http://localhost:4000/";

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get(`/hotels/${id}`).then((response) => {
        setHotel(response.data);
      });
    }
  }, [id]);
  if (!hotel) {
    return <div>Loading...</div>; // Add loading state
  }

  return (
    <div>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <div className="flex w-full -mt-10">
        <CheckOutBar />
      </div>
      <div className="  px-[50px] pt-[100px] grid grid-cols-1 2xl:grid-cols-2">
        <h1 className="text-3xl font-semibold">{hotel.title}</h1>
        <AddressLink place={hotel} />
        <div className="flex w-full ">
          {hotel.photos.length > 0 && (
            <div className="">
              <img
                className="h-full max-h-[600px] w-full object-cover overflow-hidden rounded-lg"
                src={defaultURL + "uploads/" + hotel.photos[0]}
                alt="slide"
              />
            </div>
          )}
        </div>
        <div className="mx-[70px]">
          <div className="my-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
            <div>
              <div className="my-4">
                <h2 className="font-semibold text-2xl mb-2">Description</h2>
                {hotel.description}
              </div>
              <span className="font-semibold">check-in: </span>
              {hotel.checkIn}
              <br />
              <span className="font-semibold">check-out: </span>
              {hotel.checkOut}
              <br />
              <span className="font-semibold">Max number of guests: </span>
              {hotel.maxGuests}
              <br />
            </div>
            <div>
              <AddBooking />
            </div>
          </div>
          <div className="bg-white  px-8 py-8 border-t ">
            <h2 className="font-semibold text-2xl mb-1">Extra info</h2>
            <span className="mt-8 text-sm text-gray-700 leading-4 ">
              {hotel.extraInfo}
            </span>
          </div>
        </div>
      </div>
      <ReviewForm />
      <Footer />
    </div>
  );
}
