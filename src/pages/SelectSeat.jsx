import React from "react";
import BlurCircle from "../components/BlurCircle";
import AvaialbleTime from "../components/AvaialbleTime";
import Seats from "../components/Seats";
const SelectSeat = () => {
  return (
    <div className="flex justify-around  items-center mt-30">
      <AvaialbleTime />
      <BlurCircle top="100px" left="80px" />
      <Seats />
    </div>
  );
};

export default SelectSeat;
