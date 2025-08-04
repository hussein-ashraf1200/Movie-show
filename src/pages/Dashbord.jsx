import React, { useState } from "react";
import { assets } from "../assets/assets";
import { LayoutDashboard, SquarePlus, List, ListCollapse } from "lucide-react";

// مكونات وهمية تمثل الصفحات الداخلية
const DashboardHome = () => <div className="p-4">📊 Dashboard Overview</div>;
const AddShow = () => <div className="p-4">🎬 Add New Show Form</div>;
const ListShow = () => <div className="p-4">📋 List of Shows</div>;
const ListBooking = () => <div className="p-4">🧾 List of Bookings</div>;

const Dashbord = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "add":
        return <AddShow />;
      case "list":
        return <ListShow />;
      case "booking":
        return <ListBooking />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 p-4">
        {/* logo */}
        <img className="mb-6" src={assets.logo} alt="logo" />

        {/* profile */}
        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-20 h-20"
            src={assets.profile}
            alt="profile"
          />
          <p className="mt-2 font-semibold">Admin User</p>
        </div>

        {/* menu */}
        <ul className="mt-10 space-y-4 ">
          <li
            className="flex items-center gap-2 cursor-pointer hover:bg-primary p-2 rounded-xl"
            onClick={() => setActiveTab("home")}
          >
            <LayoutDashboard />
            Dashboard
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:bg-primary p-2 rounded-xl"
            onClick={() => setActiveTab("add")}
          >
            <SquarePlus />
            Add Show
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:bg-primary p-2 rounded-xl"
            onClick={() => setActiveTab("list")}
          >
            <List />
            List Show
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:bg-primary p-2 rounded-xl"
            onClick={() => setActiveTab("booking")}
          >
            <ListCollapse />
            List Booking
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-5/6 ">{renderContent()}</div>
    </div>
  );
};

export default Dashbord;
