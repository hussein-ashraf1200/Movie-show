import React from "react";
import ActiveShowCard from "../../components/admin/ActiveShowCard";

const ActiveShow = () => {
  return (
    <div className=" ">
      <h1 className="text-2xl">Active Shows</h1>
      <div className="  flex justify-between items-center ">
        <ActiveShowCard />
      </div>
    </div>
  );
};

export default ActiveShow;
