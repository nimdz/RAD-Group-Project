import Perks from "../components/Perks";
import PhotosUploader from "../components/PhotosUploader";
import { useContext, /*useEffect ,*/ useState } from "react";
import { Navigate /*useParams*/ } from "react-router-dom";
import axios from "axios";
import ProfileNavBar from "./ProfileNavBar";
import NavBar from "./NavBar";
import BG from "../assets/images/profilebg.jpg";
import { UserContext } from "./UserContext";

export default function NewRegistration() {
  // const { id } = useParams();
  const { user } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(e) {
    e.preventDefault();

    const placeDetails = {
      email: user.email,
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };

    await axios.post("/accommodations", {
      placeDetails,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"../profile/accommodation"} />;
  }

  return (
    <>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <ProfileNavBar />
      <div className="flex justify-center w-full mt-10">
        <div className="w-3/5 border py-2 px-6">
          <form onSubmit={savePlace}>
            {preInput(
              "Title",
              "Title for your place. should be short and eye catching as in advertisement"
            )}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md py-1 pl-2"
            />

            {preInput("Address", "Address to this place")}
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-md py-1 pl-2"
            />

            {preInput("Photos", "more = better")}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />

            {preInput("Description", "description about the place.")}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md w-full py-1 pl-2 h-[100px]"
            />

            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {preInput("Extra info", "house rules, etc.")}
            <textarea
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
              className="border rounded-md w-full py-1 pl-2 h-[100px]"
            />

            {preInput(
              "Check in & out times, max Guests",
              "add check in and out times, remember to have some time window for cleaning the room between guests."
            )}

            <div className="grid gap-2 grid-cols-4 md:grid-cols-2">
              <div>
                <h3 className="mt-2 mb-1">Check in time</h3>
                <input
                  type="number"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="14"
                  className="py-1 pl-2 border rounded-md"
                />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Check out time</h3>
                <input
                  type="number"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="8"
                  className="py-1 pl-2 border rounded-md"
                />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Max number of guests</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                  placeholder="5"
                  className="py-1 pl-2 border rounded-md"
                />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Price</h3>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="5"
                  className="py-1 pl-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <button className="bg-secondary_500 text-white my-4 py-2 px-8 rounded-md font-semibold">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
