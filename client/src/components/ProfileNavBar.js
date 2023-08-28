export default function ProfileNavBar() {
  const userType = "admin";
  return (
    <div className="flex justify-center w-full">
      {userType === "customer" && (
        <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
          <div className="flex justify-between ml-10 mr-5 my-5">
            <div className="border-r pr-2">
              <label className="text-sm font-semibold">My Bookings</label>
            </div>
            <div className="border-r ml-2  pr-2">
              <label className="text-sm font-semibold">Account Details</label>
            </div>
            <div className="border-r ml-2  pr-2">
              <label className="text-sm font-semibold">Settings</label>
            </div>
            <div className=" ml-2  pr-2">
              <label className="text-sm font-semibold">Log Out</label>
            </div>
          </div>
        </form>
      )}
      {userType === "hotelOwner" && (
        <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
          <div className="flex justify-between ml-10 mr-5 my-5">
            <div className="border-r pr-2">
              <label className="text-sm font-semibold">My Accommodations</label>
            </div>
            <div className="border-r ml-2  pr-2">
              <label className="text-sm font-semibold">Account Details</label>
            </div>
            <div className="border-r ml-2  pr-2">
              <label className="text-sm font-semibold">Settings</label>
            </div>
            <div className=" ml-2  pr-2">
              <label className="text-sm font-semibold">Log Out</label>
            </div>
          </div>
        </form>
      )}
      {userType === "admin" && (
        <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
          <div className="flex justify-between ml-10 mr-5 my-5">
            <div className="border-r pr-2">
              <label className="text-sm font-semibold">Users</label>
            </div>
            <div className="border-r ml-2 pr-2">
              <label className="text-sm font-semibold">Accommodations</label>
            </div>
            <div className="border-r ml-2  pr-2">
              <label className="text-sm font-semibold">Account Details</label>
            </div>
            <div className="border-r ml-2  pr-2">
              <label className="text-sm font-semibold">Settings</label>
            </div>
            <div className=" ml-2  pr-2">
              <label className="text-sm font-semibold">Log Out</label>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
