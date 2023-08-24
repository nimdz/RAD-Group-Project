import NavBar from "../components/NavBar";
import BG from "../assets/images/homebg.jpg";
import CheckOutBar from "../components/CheckOutBar";

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
      <div className="w-full flex justify-center mt-10 text-[20px] font-semibold">
        <h1>Featured Hotels</h1>
      </div>
    </div>
  );
}
