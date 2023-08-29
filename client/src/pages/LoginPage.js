import React, { useState, useContext } from "react";
import axios from "axios";
import BG from "../assets/images/signinbg.jpg";
import { UserContext } from "../components/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [signInSuccess, setSignInSuccess] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setSignInError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("/signin", {
        email,
        password,
      });

      // Clear error messages and set success message
      setEmailError("");
      setPasswordError("");
      setSignInError("");
      setSignInSuccess("Sign in successful!");

      setUser(response.data);

      navigate("/");
      console.log(response.data);
    } catch (error) {
      // Handle error (e.g., show error message)
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        setSignInError(message);
      } else {
        console.error("Sign in failed:", error);
      }
    }
  };

  return (
    <div className="grid grid-cols-[7fr_6fr] h-screen text-primary_700">
      <img src={BG} alt="background" className="object-cover h-screen w-full" />
      <div className="flex items-center justify-center">
        <form className="w-3/5 max-w-[400px]" onSubmit={handleSignIn}>
          <h1 className="text-[32px] font-semibold text-center">Sign In</h1>

          <input
            type="email"
            className={`border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm ${
              emailError ? "border-red-500" : ""
            }`}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}

          <input
            type="password"
            className={`border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm ${
              passwordError ? "border-red-500" : ""
            }`}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}

          {signInError && (
            <p className="text-red-500 text-xs mt-2">{signInError}</p>
          )}
          {signInSuccess && (
            <p className="text-green-500 text-sm mt-2">{signInSuccess}</p>
          )}

          <button
            className="bg-secondary_500 text-white font-semibold w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-4 text-sm"
            type="submit"
          >
            Sign In
          </button>
          <p className="text-xs text-center mt-2">
            Don't have an Account?{" "}
            <Link to="/signup" className="font-semibold">
              <u>Register Here</u>
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
