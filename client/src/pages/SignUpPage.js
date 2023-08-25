import BG from "../assets/images/signupbg.jpg";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="grid grid-cols-[7fr_6fr] h-screen text-primary_700">
      <img src={BG} alt="background" className="object-cover h-screen w-full" />
      <div className="flex items-center justify-center">
        <form className="w-3/5 max-w-[400px]">
          <h1 className="text-[32px] font-semibold text-center">Sign Up</h1>
          <input
            type="text"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Full name"
          />
          <input
            type="email"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Email"
          />
          <input
            type="password"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Password"
          />
          <input
            type="password"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Confirm Password"
          />
          <input type="checkbox" id="terms" className="mt-4 shadow-sm" />
          <label htmlFor="terms" className="text-xs ml-1 text-primary_700">
            I agree to the{" "}
            <Link href="/" className="font-semibold">
              Terms of Service
            </Link>
          </label>
          <button
            className="bg-secondary_500 text-white font-semibold w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-xs text-center mt-2">
            Already have an Account?{" "}
            <Link to="/login" className="font-semibold">
              <u>Login Here</u>
            </Link>
          </p>

          <Link
            to="/"
            className="absolute right-0 bottom-0 mr-20 mb-20 text-sm flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to home
          </Link>
        </form>
      </div>
    </div>
  );
}
