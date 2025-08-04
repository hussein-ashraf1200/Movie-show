import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Moveis from "./pages/Moveis";
import Theaters from "./pages/Theaters";
import Releases from "./pages/Releases";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Footer from "./pages/Footer";
import Selections from "./pages/Selections";
import SelectSeat from "./pages/SelectSeat";
import { Toaster } from "react-hot-toast"; // ✅ تم الإضافة هنا
import Dashbord from "./pages/Dashbord";
import Layout from "./pages/admin/Layout";
import Dashoard from "./pages/admin/Dashoard";
import AddShows from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBookings from "./pages/admin/ListBookings";

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");
  return (
    <>
      {!hideLayout && <Navbar />}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moveis" element={<Moveis />} />
        <Route path="/theaters" element={<Theaters />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sginup" element={<Logout />} />
        <Route path="/selection" element={<Selections />} />
        <Route path="/seat" element={<SelectSeat />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashoard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-booking" element={<ListBookings />} />
        </Route>
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
