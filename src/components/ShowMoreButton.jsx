import React from "react";
import { useNavigate } from "react-router-dom";

const ShowMoreButton = () => {
  const navgate = useNavigate();
  const viewHandell = () => {
    navgate("/moveis");
  };
  return (
    <div>
      <button
        onClick={viewHandell}
        className="bg-[#D63854] text-white text-sm px-4 py-2 rounded-xl
       hover:bg-[#b72d46] transition-colors w-36 mt-12 cursor-pointer "
      >
        Show More
      </button>
    </div>
  );
};

export default ShowMoreButton;
