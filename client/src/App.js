import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Users from "./components/Users";
import Profile from "./components/Profile";
import TermsPage from "./pages/TermsPage";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage";
import Accommodation from "./components/Accommodation";
import NewAccommodation from "./components/NewAccommodationForm";
import AdminAccommodation from "./components/AdminAccommodation";
import Service from "./components/Service";
import ServiceForm from "./components/ServiceForm";
import GetBooking from "./pages/GetBooking";
import AddBooking from "./pages/AddBooking";
import UpdateBooking from "./pages/UpdateBooking";
import HotelPage from "./pages/HotelPage";
import HotelBookingPage from "./pages/HotelBookingPage";
import Review from "./components/Review";

axios.defaults.baseURL = "http://localhost:4000/";

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/users" element={<Users />} />
        <Route path="/profile/account" element={<Profile />} />
        <Route path="/profile/review" element={<Review />} />
        <Route path="/profile/accommodation" element={<Accommodation />} />
        <Route
          path="/profile/accommodation/new"
          element={<NewAccommodation />}
        />
        <Route
          path="/profile/admin_accommodation"
          element={<AdminAccommodation />}
        />
        <Route path="/profile/service" element={<Service />} />
        <Route path="/profile/service/new" element={<ServiceForm />} />
        <Route path="/booking" element={<GetBooking />} />
        <Route path="/booking/add" element={<AddBooking />} />
        <Route path="/booking/update" element={<UpdateBooking />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/hotel/:id" element={<HotelBookingPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
