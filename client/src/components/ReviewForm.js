import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function ReviewForm() {
  const { user } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    // Fetch reviews from the server when the component mounts
    axios.get("/review").then((response) => {
      setReviews(response.data);
    });
  }, []);

  async function savePlace(e) {
    e.preventDefault();

    const reviewDetails = {
      email: user.email,
      title,
      description,
    };

    await axios.post("/review", {
      reviewDetails,
    });

    axios.get("/review").then((response) => {
      setReviews(response.data);
    });
  }

  return (
    <>
      <div className="flex justify-center w-full mt-10">
        <div className="w-3/5 border py-2 px-6">
          <form onSubmit={savePlace}>
            {preInput("About", "Your feedback about.")}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md py-1 pl-2"
            />

            {preInput("Feedback Message", "Description about that.")}
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
      <div className="flex justify-center my-[20px]">
        <div className="w-4/5">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <ul className="mt-[10px] pl-[5px]">
            {reviews.map((review) => (
              <li key={review._id} className="border mt-[5px]">
                <strong>{review.title}</strong>
                <p className="text-sm">{review.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
