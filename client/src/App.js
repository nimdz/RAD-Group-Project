import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Users from "./components/Users";
import Profile from "./components/Profile";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage";

axios.defaults.baseURL = "http://localhost:4000/";

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/users" element={<Users />} />
        <Route path="/profile/account" element={<Profile />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
