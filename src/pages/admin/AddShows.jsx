import React, { useState } from "react";
import NowPlaying from "../../components/admin/NowPlaying";
import { DeleteIcon } from "lucide-react";
import toast from "react-hot-toast";

const AddShows = () => {
  const [showprice, setShowPrice] = useState("");
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showDates, setShowDates] = useState([]);

  // Add new date/time
  const addShow = () => {
    if (dateTimeInput && !showDates.includes(dateTimeInput)) {
      setShowDates([...showDates, dateTimeInput]);
      setDateTimeInput("");
    }
    if (!dateTimeInput) {
      toast.error("Please select a date and time.");
      return;
    }
  };

  // Delete selected date/time
  const deleteHandler = (date) => {
    setShowDates(showDates.filter((d) => d !== date));
  };
  const AddShowHandel = () => {
    toast("This feature is disabled in demo");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">
        Admin <span className="text-red-500 underline">Add Show</span>
      </h1>

      {/* Now Playing */}
      <div className="mt-6">
        <p className="font-medium text-lg mb-2">Now Playing Movies</p>
        <NowPlaying />
      </div>

      {/* Show Price */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border w-40 sm:w-fit border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-600 text-sm">$</p>
          <input
            min={0}
            type="number"
            value={showprice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter Show Price"
            className="outline-none w-full"
          />
        </div>
      </div>

      {/* Date & Time Input */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>
        <div className="inline-flex gap-5 border border-gray-600 p-2 pl-3 rounded-lg max-h-12">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none bg-white text-black rounded-md w-40 sm:w-fit"
          />

          <button
            onClick={addShow}
            className="bg-primary/80 text-white px-3 py-2 sm:text-sm text-[10px] 
            text-center items-center flex rounded-lg hover:bg-primary cursor-pointer"
          >
            Add Time
          </button>
        </div>

        {/* Show Added Date/Time */}
        {showDates.length > 0 && (
          <div className="mt-4 space-y-2 ">
            <p className="text-primary font-semibold">
              Selected Dates & Times:
            </p>
            {showDates.map((date, index) => (
              <div
                key={index}
                className="border border-primary p-2 flex items-center justify-between gap-2 w-46"
              >
                <p>
                  <span className="font-medium"></span> {date.split("T")[0]}
                </p>
                <div>
                  <p>
                    <span className="font-medium"></span> {date.split("T")[1]}
                  </p>
                </div>
                <button onClick={() => deleteHandler(date)}>
                  <DeleteIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={AddShowHandel}
          className=" bg-primary mt-4 p-2 flex items-center justify-between rounded-xl cursor-pointer"
        >
          Add show
        </button>
      </div>
    </div>
  );
};

export default AddShows;
