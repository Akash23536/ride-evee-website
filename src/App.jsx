import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Career from "./components/careers/Career";
import AccountSettings from "./components/AccountSettings";
import About from "./components/about/About";
import Bookings from "./components/bookings/Bookings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmed from "./components/confirmed/Confirmed";
import ContactUs from "./components/contact/ContactUs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirmed" element={<Confirmed />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
