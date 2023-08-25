export default function CheckOutBar() {
  return (
    <div className="flex justify-center w-full">
      <form className="w-6/7 bg-white max-w-[800px] rounded-full shadow-md">
        <div className="flex justify-between ml-10 mr-5 my-5">
          <div className="border-r">
            {/* i need to add border only in right */}
            <label className="text-sm font-semibold">Location</label>
            <input
              type="text"
              className="text-sm py-1 "
              placeholder="Where are you staying?"
            />
          </div>
          <div className="border-r ml-2">
            <label className="text-sm font-semibold">Check In</label>
            <input
              type="date"
              className="text-sm text-gray-400 py-1"
              value="Add date"
            />
          </div>
          <div className="border-r ml-2">
            <label className="text-sm font-semibold">Check Out</label>
            <input type="date" className="text-sm text-gray-400 py-1" />
          </div>
          <div className="border-r ml-2">
            <label className="text-sm font-semibold">Guests</label>
            <input
              type="number"
              className="text-sm py-1"
              placeholder="Number of guests"
            />
          </div>
          <button className="p-4 bg-secondary_500 rounded-full text-white ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
