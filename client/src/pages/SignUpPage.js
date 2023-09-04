import React, { useState } from "react";
import axios from "axios";
import BG from "../assets/images/signupbg.jpg";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [userType, setUserType] = useState("");
  const [userTypeError, setUserTypeError] = useState("");

  const handleFullNameChange = (event) => {
    const value = event.target.value;
    setFullName(value);

    if (value.length < 4) {
      setFullNameError("Full name should be at least 4 characters.");
    } else {
      setFullNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!value.match(passwordRegex)) {
      setPasswordError(
        "Password should be at least 6 characters and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setUserType(value);
    setUserTypeError("");
  };

  const handleTermsChange = (event) => {
    const value = event.target.checked;
    setAgreeToTerms(value);

    if (!value) {
      setTermsError("You must agree to the terms of service.");
    } else {
      setTermsError("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("Please agree to the terms of service.");
      return;
    }

    if (fullName.length < 4) {
      alert("Full name should be at least 4 characters.");
      return;
    }

    if (!userType) {
      setUserTypeError("Please select a user type.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password.match(passwordRegex)) {
      alert(
        "Password should be at least 6 characters and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
      );
      return;
    }

    try {
      const emailCheckResponse = await axios.post("/check-email", { email });
      if (!emailCheckResponse.data.available) {
        setEmailAvailable(false);
        setSuccessMessage("Email already in use.");
        return;
      }

      const response = await axios.post("/signup", {
        fullName,
        email,
        password,
        userType,
      });

      setTermsError("");
      setFullNameError("");
      setPasswordError("");
      setSuccessMessage("Sign up successful! You can now log in.");

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeToTerms(false);

      console.log(response.data);
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <div className="grid grid-cols-[7fr_6fr] h-screen text-primary_700">
      <img src={BG} alt="background" className="object-cover h-screen w-full" />
      <div className="flex items-center justify-center">
        <form className="w-3/5 max-w-[400px]" onSubmit={handleSignUp}>
          <h1 className="text-[32px] font-semibold text-center">Sign Up</h1>
          <input
            type="text"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Full name"
            value={fullName}
            onChange={handleFullNameChange}
          />
          {fullNameError && (
            <p className="text-red-500 text-xs">{fullNameError}</p>
          )}
          <input
            type="email"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          <input
            type="password"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}
          <input
            type="password"
            className="border w-full rounded-md shadow-sm shadow-gray-500 py-2 pl-2 mt-6 text-sm"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-xs">{confirmPasswordError}</p>
          )}
          <div className="flex flex-col items-start mt-4">
            <label className="text-xs text-primary_700 mb-1">
              Select User Type:
            </label>
            <div>
              <input
                type="radio"
                id="customer"
                value="customer"
                checked={userType === "customer"}
                onChange={handleUserTypeChange}
              />
              <label
                htmlFor="customer"
                className="ml-1 mr-4 text-xs text-primary_700"
              >
                Customer
              </label>
              <input
                type="radio"
                id="hotelOwner"
                value="hotelOwner"
                checked={userType === "hotelOwner"}
                onChange={handleUserTypeChange}
              />
              <label
                htmlFor="hotelOwner"
                className="ml-1 text-xs text-primary_700"
              >
                Hotel Owner
              </label>
            </div>
          </div>
          {userTypeError && (
            <p className="text-red-500 text-xs">{userTypeError}</p>
          )}
          <input
            type="checkbox"
            id="terms"
            className="mt-4 shadow-sm"
            onChange={handleTermsChange}
            checked={agreeToTerms}
          />
          <label htmlFor="terms" className="text-xs ml-1 text-primary_700">
            I agree to the{" "}
            <Link to="/terms" className="font-semibold">
              Terms of Service
            </Link>
          </label>
          {termsError && <p className="text-red-500 text-xs">{termsError}</p>}
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
          {emailAvailable ? (
            successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )
          ) : (
            <p className="text-red-500 text-sm mt-2">Email already in use.</p>
          )}
        </form>
      </div>
    </div>
  );
}
