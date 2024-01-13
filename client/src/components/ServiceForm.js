import PhotosUploader from "../components/PhotosUploader";
import { useContext, /*useEffect ,*/ useState } from "react";
import { Navigate /*useParams*/ } from "react-router-dom";
import axios from "axios";
import ProfileNavBar from "./ProfileNavBar";
import NavBar from "./NavBar";
import BG from "../assets/images/profilebg.jpg";
import { UserContext } from "./UserContext";

export default function ServiceForm() {
  // const { id } = useParams();
  const { user } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   axios.get("/accommodations/" + id).then((response) => {
  //     const { data } = response;
  //     setEmail(data.email);
  //     setTitle(data.title);
  //     setAddress(data.address);
  //     setAddedPhotos(data.photos);
  //     setDescription(data.description);
  //     setPerks(data.perks);
  //     setExtraInfo(data.extraInfo);
  //     setCheckIn(data.checkIn);
  //     setCheckOut(data.checkOut);
  //     setMaxGuests(data.maxGuests);
  //     setPrice(data.price);
  //   });
  // }, []);

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

    const serviceDetails = {
      email: user.email,
      title,
      addedPhotos,
      description,
    };

    await axios.post("/service", {
      serviceDetails,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"../profile/service"} />;
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
            {preInput("Service Title", "Title for your service.")}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md py-1 pl-2"
            />

            {preInput("Photo", "for represent the service.")}
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
