import React, { useState } from "react";
import { dummyDateTimeData } from "../assets/assets";

const ShowDateTimePicker = ({ onSelect }) => {
  const availableDates = Object.keys(dummyDateTimeData);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // reset time
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onSelect) {
      onSelect({ date: selectedDate, time });
    }
  };

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Choose Show Date
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {availableDates.map((date) => (
          <button
            key={date}
            onClick={() => handleDateSelect(date)}
            className={`px-4 py-2 rounded-md border ${
              selectedDate === date ? "bg-primary text-white" : "bg-gray-700"
            } hover:bg-primary transition`}
          >
            {new Date(date).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </button>
        ))}
      </div>

      {selectedDate && (
        <>
          <h3 className="text-lg font-semibold mt-6 mb-3 text-center">
            Available Times
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {dummyDateTimeData[selectedDate]?.map((entry) => {
              const time = new Date(entry.time).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });
              return (
                <button
                  key={entry.time}
                  onClick={() => handleTimeSelect(time)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedTime === time ? "bg-green-600" : "bg-gray-800"
                  } hover:bg-green-700 transition`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-6 text-center text-lg text-green-400">
          ✅ You selected: <strong>{selectedDate}</strong> at{" "}
          <strong>{selectedTime}</strong>
        </div>
      )}
    </div>
  );
};

export default ShowDateTimePicker;
