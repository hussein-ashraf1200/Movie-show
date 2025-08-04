import React, { useState } from "react";
import { dummyDateTimeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SelectedDate = () => {
  const dates = Object.keys(dummyDateTimeData);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const bookingHanddel = () => {
    if (selected) {
      navigate("/seat", { state: { selectedDate: selected } }); //لتمرير التاريخ المختار في  seat
    } else {
      toast.error("Please select a date before booking.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="border border-primary bg-[#210F14] min-h-[150px]
       w-3/4 rounded-xl flex justify-center items-center flex-col p-4 relative"
      >
        <p className="text-white text-center mb-4 text-lg">Choose Date</p>

        <div className="flex justify-center items-center flex-wrap gap-4">
          {dates.map((date) => {
            const formattedDate = new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            });
            const isSelected = selected === date;

            return (
              <div
                onClick={() => setSelected(date)}
                key={date}
                className={`border flex-col flex border-primary text-white px-4 py-2 rounded-xl cursor-pointer transition ${
                  isSelected
                    ? "bg-primary text-black"
                    : "bg-[#311B21] hover:bg-primary hover:text-black"
                }`}
              >
                {formattedDate}
              </div>
            );
          })}
        </div>

        <button
          onClick={bookingHanddel}
          className="bg-[#D63854] cursor-pointer
           text-white mt-7
           text-sm px-4 py-2 rounded-xl hover:bg-[#b72d46] 
           transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SelectedDate;
