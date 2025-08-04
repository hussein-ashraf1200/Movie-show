import React, { useState } from "react";
import { Clock1 } from "lucide-react";
import { dummyDateTimeData } from "../assets/assets";
import { useLocation } from "react-router-dom";

const AvaialbleTime = () => {
  const location = useLocation();
  const { selectedDate } = location.state || {};
  const [selectedTime, setSelectedTime] = useState(null);

  const AvaialbleTimes = dummyDateTimeData[selectedDate] || [];

  return (
    <div className="flex justify-between items-center">
      <div className="border border-primary bg-[#210F14] p-4 rounded-xl text-white w-full">
        <p className="text-lg mb-2">Available Timings</p>
        <div className="flex flex-col gap-4">
          {AvaialbleTimes.map((item) => {
            const timeString = new Date(item.time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            const isSelected = selectedTime === item.time;

            return (
              <div
                key={item.showId}
                onClick={() => setSelectedTime(item.time)}
                className={`flex gap-3 p-2 rounded-xl cursor-pointer ${
                  isSelected ? "bg-primary text-white" : "hover:bg-[#4C1A24]"
                }`}
              >
                <Clock1 />
                <span>{timeString}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvaialbleTime;
