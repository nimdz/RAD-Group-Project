import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export default function ProfileNavBar() {
  const { user } = useContext(UserContext);

  if (!user) {
    return null; // or render a loading indicator or other content
  }

  const userType = user?.userType;
  return (
    <div className="flex justify-center w-full -mt-10">
      {userType === "customer" && (
        <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
          <div className="flex justify-between ml-10 mr-5 my-5">
            <div className="border-r pr-2">
              <Link className="text-sm font-semibold">My Bookings</Link>
            </div>
            <div className="border-r ml-2  pr-2">
              <Link className="text-sm font-semibold" to="/profile/account">
                Account Details
              </Link>
            </div>
            <div className="ml-2  pr-2">
              <Link className="text-sm font-semibold">Settings</Link>
            </div>
          </div>
        </form>
      )}
      {userType === "hotelOwner" && (
        <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
          <div className="flex justify-between ml-10 mr-5 my-5">
            <div className="border-r pr-2">
              <Link className="text-sm font-semibold">My Accommodations</Link>
            </div>
            <div className="border-r ml-2  pr-2">
              <Link className="text-sm font-semibold" to="/profile/account">
                Account Details
              </Link>
            </div>
            <div className=" ml-2  pr-2">
              <Link className="text-sm font-semibold">Settings</Link>
            </div>
          </div>
        </form>
      )}
      {userType === "admin" && (
        <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
          <div className="flex justify-between ml-10 mr-5 my-5">
            <div className="border-r pr-2">
              <Link className="text-sm font-semibold" to="/profile/users">
                Users
              </Link>
            </div>
            <div className="border-r ml-2 pr-2">
              <Link className="text-sm font-semibold">Accommodations</Link>
            </div>
            <div className="border-r ml-2  pr-2">
              <Link className="text-sm font-semibold" to="/profile/account">
                Account Details
              </Link>
            </div>
            <div className="ml-2  pr-2">
              <Link className="text-sm font-semibold">Settings</Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
