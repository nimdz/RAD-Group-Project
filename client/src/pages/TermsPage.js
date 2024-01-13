import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BG from "../assets/images/homebg.jpg";

export default function TermsAndServices() {
  return (
    <div>
      <NavBar />
      <div className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        <img src={BG} alt="background" className="object-cover w-full" />
      </div>
      <h1 className="font-semibold text-primary_700 text-center text-3xl mt-10 mb-10">
        Terms and Services
      </h1>
      <div className="flex w-full justify-around">
        <div className="w-1/2">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to StayHere Booking. These terms and services govern your
              use of our platform and services. By using our platform, you agree
              to comply with these terms.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              2. User Responsibilities
            </h2>
            <p>
              Users are responsible for maintaining accurate and up-to-date
              information on their accounts. Any misuse of the platform or
              violation of our policies may result in account suspension.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              3. Booking and Payment
            </h2>
            <p>
              Bookings can be made through our platform. Payment is required for
              confirmation. Cancellations and refunds are subject to our
              cancellation policy, which can be found on our website.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              4. User Content
            </h2>
            <p>
              Users may submit content to our platform, such as reviews and
              ratings. By doing so, users grant us a non-exclusive, worldwide,
              royalty-free license to use, reproduce, and publish the content.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              5. Privacy and Security
            </h2>
            <p>
              We take user privacy seriously. Our Privacy Policy outlines how we
              collect, use, and protect your personal information.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              StayHere Booking is not liable for any damages or losses arising
              from the use of our platform or services. Users are responsible
              for their own actions and interactions.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              7. Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Changes will be
              communicated through our platform. Continued use of our platform
              after changes constitutes acceptance of the updated terms.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-primary_700 mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about these terms and
              services, please contact our support team at stayhere@gmail.com .
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
