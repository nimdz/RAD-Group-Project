import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
